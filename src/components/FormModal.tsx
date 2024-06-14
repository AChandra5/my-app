/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Directions } from "@mui/icons-material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useSnackbar } from "notistack";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#F5F5F5",
  border: "2px solid #000",
  p: 4,
  borderRadius: "10px",
  overFlowY: "auto",
  "@media (max-width: 600px)": {
    width: "70%",
    height: "50%",
    overflow: "auto",
  },
  "@media (min-width: 960px)": {
    width: "30%",
    height: "auto",
    overflow: "auto",
  },
};

interface IFormInput {
  fullName: string;
  contactNum: string;
  email: string;
  notes: string;
}

interface ModalDialogProps {
  open: boolean;
  handleClose: () => void;
}

function FormModal({ open, handleClose }: ModalDialogProps) {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    setFocus,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      fullName: "",
      contactNum: "",
      email: "",
      notes: "",
    },
  });
  const form = useRef(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [formSubmit, setFormSubmit] = useState(false);

  const onSubmit = (data: any) => {
    if (form.current) {
      emailjs
        .sendForm(
          "service_bt1iitx",
          "contact_reply",
          form.current,
          "0Gj0706cwWsoelx5K"
        )
        .then(
          (result) => {
            enqueueSnackbar(
              "Thankyou for  submitting the details. I will get back to you!",
              { variant: "success" }
            );
            setFormSubmit(true);
            reset();
          },
          (error) => {
            console.error("Failed to send email:", error.text);
            enqueueSnackbar(
              `we found some error in reaching with AKhil ${error.text}. We'll fix it soon`,
              { variant: "success" }
            );
          }
        );
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box>
            <CloseIcon
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                fill: "gray",
                cursor: "pointer",
                fontSize: "2rem",
                marginRight: "5px",
              }}
              onClick={handleClose}
            />
          </Box>
          {formSubmit ? (
            <div style={{ textAlign: "center" }}>
              <img src={"/assets/Fireworks.gif"} alt="form-submitted" />
              <Typography
                variant="h6"
                sx={{ mt: 2, color: "black", fontWeight: "bold" }}
              >
                Form submitted successfully! You can submit another request
                after reloading the page.
              </Typography>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
              <div className="p-3">
                <Controller
                  name="fullName"
                  control={control}
                  rules={{ required: "Full name is a mandatory field" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Full Name"
                      variant="outlined"
                      error={!!errors.fullName}
                      helperText={
                        errors.fullName ? errors.fullName.message : ""
                      }
                      fullWidth
                    />
                  )}
                />
              </div>
              <div className="p-3">
                <Controller
                  name="contactNum"
                  control={control}
                  rules={{ required: "Contact number is a mandatory field" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Contact Number"
                      variant="outlined"
                      error={!!errors.contactNum}
                      helperText={
                        touchedFields.contactNum && errors.contactNum
                          ? errors.contactNum.message
                          : ""
                      }
                      fullWidth
                    />
                  )}
                />
              </div>
              <div className="p-3">
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is a mandatory field",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      error={!!errors.email}
                      helperText={
                        touchedFields.email && errors.email
                          ? errors.email.message
                          : ""
                      }
                      fullWidth
                    />
                  )}
                />
              </div>
              <div className="p-3">
                <Controller
                  name="notes"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Comments"
                      variant="outlined"
                      fullWidth
                      sx={{ minheight: "250px" }}
                      InputProps={{
                        style: {
                          height: "70px", // Increase the input height
                        },
                      }}
                    />
                  )}
                />
              </div>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{
                  textAlign: "center",
                  width: "50%",
                  margin: "13px",
                  background: "#4D5D53",
                  fontWeight: "600",
                  fontFamily: "monospace",
                }}
              >
                Submit
              </Button>
            </form>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}

export default FormModal;
