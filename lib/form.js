import { ServerError, NetworkError } from "lib/errors"

let formData = {}
let errors = []
let query = {}
let styles = {}
let validate = {}

export function Form(init) {
  init = {
    method: "post",
    onSubmit: handleSubmit,
    ...init,
  }

  query = init.session?.query
  styles = init.className
  validate = init.validate

  return ({children}) => {
    return <form id="contactForm" className={styles.form} action={init.action} method="post" onSubmit={init.onSubmit}>{children}</form>
  }
}

export function Field(props) {
  let fieldProps = {
    type: "text",
    onChange: handleInputChange,
    ...props,
  }
  if (query[props.name] && (props.type === "text" || props.type === "textarea")) fieldProps.value = query[props.name]
  if (query[props.name] === "true" && props.type === "checkbox") fieldProps.checked = true
  if (props.type === "submit") {
    fieldProps.className = styles.submit
    if (!fieldProps.id) fieldProps.id = "submitButton"
    else fieldProps.id += " submitButton"
  }
  if (props.type === "textarea") return (<label>{props.label}<textarea {...fieldProps} /></label>)
  else if (props.type === "checkbox" || props.type === "radio") return (<label><input {...fieldProps} />{props.label}</label>)
  else if (props.type === "submit" || props.type === "button") return (<input {...fieldProps} />)
  else return (<label>{props.label}<input {...fieldProps} /></label>)
}

export function FormResponse() {
  if (query.success === undefined) {
    return <ResponseDetails /> 
  } else if (query.success === "true") {
    return (
      <ResponseDetails className={styles.success}>
        Your message was sent!
      </ResponseDetails>
    )
  } else {
    let responseErrors = []
    for (let key in query) {
      if (key.match(/^error\d/)) {
        responseErrors.push(query[key])
      }
    }
    return (
      <ResponseDetails className={styles.error}>
        {query.type + ": " + query.errorMessage}
        {responseErrors.length > 0 && (
          <ul>
            {responseErrors.map((errorMsg, index) => (
              <li key={index}>{errorMsg}</li>
            ))}
          </ul>
        )}
      </ResponseDetails>
    )
  }
}

const ResponseDetails = ({className, children}) => {
  return (
    <div id="formMessage" className={className}>
      {children}
    </div>
  )
}

async function sendMail() {
  try {

    if (!validateForm()) {
      throw new Error("This function was called without passing error validation.")
    }

    const response = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        validate: validate,
        ...formData,
      }),
    })

    if (response.status === 404) {
      throw new NetworkError(`Got 404 response from API.`)
    }

    let result

    try {
      result = await response.json()
    }
    catch {
      throw new Error("API response was not JSON.")
    }

    if (response.status === 200) {
      console.log(result)
      return true
    } else if (response.status === 500) {
      console.log(result)
      throw new ServerError(`${result.error.message}`)
    }
    else {
      throw new Error(`Unexpected fetch response with status ${response.status}.`)
    }
  }
  catch (e) {
    throw e
  }
}

function handleInputChange(event) {
  let target = event.target
  let value = target.type === 'checkbox' ? target.checked : target.value
  let name = target.name

  formData[name] = value
}

function handleSubmit(event) {
  event.preventDefault()

  if (validateForm()) {
    displayLoading()
    sendMail().then(displaySuccess).catch(displayServerErrors)
  }
  else { 
    displayErrors()
  }
}

function validateForm() {
  if (!validate) return true
  errors = []

  for (let key in validate) {
    if (validate.hasOwnProperty(key)) {
      // Required
      if (!formData[key] && validate[key].required === true) errors.push(`${key} is required.`)
      // Valid Email
      if (validate[key].validEmail === true && formData[key]) {
        if (!formData[key].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) errors.push(`${key} is not a valid email address.`)
      }
      // Match
      if (validate[key].match && formData[key]) {
        if (!formData[key].match(validate[key].match.regex)) {
          if (validate[key].match.message) errors.push(`${validate[key].match.message}`)
          else errors.push(`${key} did not match expected format.`)
        }
      }
    }
  }

  if (errors.length === 0) {
    return true
  }
  else {
    return false
  }
}

function displaySuccess() {
  resetForm()
  setMessageType("formMessage", styles.success)
  document.getElementById("formMessage").innerHTML = "Your message was sent!"
}

function displayLoading() {
  setMessageType("formMessage", styles.loading)
  document.getElementById("formMessage").innerHTML = "Sending . . ."
  document.getElementById("submitButton").setAttribute("disabled", true)
}

function displayErrors() {
  let output = "<ul>"
  for (let i of errors) {
    output += `<li>${capitalizeString(i)}</li>`
  }
  output += "</ul>"
  setMessageType("formMessage", styles.error)
  document.getElementById("formMessage").innerHTML = output
}

function displayServerErrors(e) {
  errors = []
  errors.push(`ServerError: ${e.message}`)
  displayErrors()
  document.getElementById("submitButton").removeAttribute("disabled")
}

function resetForm() {
  formData = {}
  errors = []
  document.getElementById("contactForm").reset()
  document.getElementById("formMessage").innerHTML = ``
  document.getElementById("submitButton").removeAttribute("disabled")
}

function setMessageType(elementID, className) {
  document.getElementById(elementID).classList.remove(styles.loading)
  document.getElementById(elementID).classList.remove(styles.error)
  document.getElementById(elementID).classList.remove(styles.success)
  document.getElementById(elementID).classList.add(className)
}

function capitalizeString(s) {
  if (!s) return undefined
  let copy = Array.from(s)
  copy[0] = copy[0].toUpperCase()
  return copy.join("")
}