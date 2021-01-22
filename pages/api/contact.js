import { InputError } from "lib/errors"

export default async (req, res) => {
  const jsonRequest = req.headers["content-type"] === "application/json" || false
  const { name, email, workshops, coaching, community, message } = req.body

  try {
    let errors = []
    if (!name) errors.push("A name is required.")
    if (!email) errors.push("An email address is required.")
    else if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) errors.push("Email address must be a valid format.")
    if (!message) errors.push("A message is required.")

    if (errors.length > 0) {
      throw new InputError("Invalid parameters in request.", errors)
    }

    let htmlBody = `<p>${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g,"<br/>")}</p>`

    const nodemailer = require("nodemailer")

    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT,
      secure: true,
      auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD,
      },
    })

    const mailOptions = {
      from: `${process.env.USERNAME}`,
      to: `${process.env.RECEIVER}`,
      subject: `${name} messaged you from odegard.group`,
      html: htmlBody,
    }

    const mailResponse = await transporter.sendMail(mailOptions)

    if (mailResponse.accepted.length === 0) {
      throw new Error("Message had no valid recipients.")
    }

    if (jsonRequest) {
      res.status(200).json({
        success: true,
        // debug: mailResponse,
      })
    }
    else {
      let s = new URLSearchParams
      s.set("success", true)
      res.redirect(307, `/contact?${s.toString()}`)
    }

  }
  catch (e) {

    let errorMessage

    switch (e.code) {
      case "EDNS":
        errorMessage = "Host address refused connection."
        break
      
      case "ESOCKET":
        errorMessage = `Connection on port ${e.port} refused.`
        break
      
      case "EAUTH":
        errorMessage = "Could not authenticate with mail server."
        break

      default:
        errorMessage = e.message
    }

    if (jsonRequest) {
      res.status(500).json({
        success: false,
        error: {
          message: errorMessage,
          type: e.name,
          details: e.errors,
          // debug: {...e},
        },
      })
    }
    else {
      let s = new URLSearchParams()
      s.set("success", false)
      s.set("name", name)
      s.set("email", email)
      s.set("message", message)
      s.set("workshops", workshops ? true : false)
      s.set("coaching", coaching ? true : false)
      s.set("community", community ? true : false)
      if (e instanceof InputError) {
        s.set("type", e.name)
        s.set("errorMessage", e.message)
        for (let i = 0; i < e.errors.length; i++) {
          s.append(`error${i+1}`, e.errors[i])
        }
      } else {
        s.set("type", "ServerError")
        s.set("errorMessage", errorMessage)
      }
      res.redirect(307, `/contact?${s.toString()}`)
    }
  }
}