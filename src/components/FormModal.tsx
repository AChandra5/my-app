import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useSnackbar } from 'notistack';
import Image from 'next/image';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '92%',
  maxWidth: 440,
  maxHeight: '88vh',
  overflowY: 'auto' as 'auto',
  bgcolor: '#101018',
  border: '1px solid rgba(255,255,255,0.1)',
  boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
  p: { xs: 3, sm: 4 },
  borderRadius: '16px',
};

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    color: '#f5f5f7',
    borderRadius: '10px',
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.15)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255,255,255,0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8b5cf6',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(245,245,247,0.6)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#8b5cf6',
  },
  '& .MuiFormHelperText-root': {
    color: '#f87171',
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
    formState: { errors, touchedFields },
  } = useForm<IFormInput>({
    defaultValues: {
      fullName: '',
      contactNum: '',
      email: '',
      notes: '',
    },
  });

  const form = useRef<HTMLFormElement | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  const [formSubmit, setFormSubmit] = useState(false);

  const onSubmit = () => {
    if (form.current) {
      emailjs
        .sendForm('service_bt1iitx', 'contact_reply', form.current, '0Gj0706cwWsoelx5K')
        .then(
          () => {
            enqueueSnackbar('Thank you for submitting the details. I will get back to you!', {
              variant: 'success',
            });
            setFormSubmit(true);
            reset();
          },
          (error) => {
            console.error('Failed to send email:', error.text);
            enqueueSnackbar('We found an error sending your message. Please try again soon.', {
              variant: 'error',
            });
          },
        );
    }
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
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
                position: 'absolute',
                top: 12,
                right: 12,
                color: 'rgba(245,245,247,0.5)',
                cursor: 'pointer',
                fontSize: '1.6rem',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#f5f5f7',
                },
              }}
              onClick={handleClose}
            />
          </Box>

          {formSubmit ? (
            <div style={{ textAlign: 'center' }}>
              <Image
                src='/assets/Fireworks.gif'
                alt='form submitted'
                width={320}
                height={180}
                style={{ maxWidth: '100%', borderRadius: 12 }}
              />
              <Typography
                variant='h6'
                sx={{
                  mt: 2,
                  color: '#f5f5f7',
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Form submitted successfully! You can submit another request after reloading the page.
              </Typography>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
              <Typography
                variant='h6'
                sx={{ color: '#f5f5f7', fontFamily: 'var(--font-heading)', fontWeight: 700, mb: 0.5 }}
              >
                Let&apos;s talk
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: 'rgba(245,245,247,0.6)', mb: 2, fontFamily: 'var(--font-body)' }}
              >
                Drop your details and I&apos;ll get back to you shortly.
              </Typography>

              <div className='p-3'>
                <Controller
                  name='fullName'
                  control={control}
                  rules={{ required: 'Full name is a mandatory field' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label='Full Name'
                      variant='outlined'
                      error={!!errors.fullName}
                      helperText={errors.fullName ? errors.fullName.message : ''}
                      fullWidth
                      sx={textFieldSx}
                    />
                  )}
                />
              </div>

              <div className='p-3'>
                <Controller
                  name='contactNum'
                  control={control}
                  rules={{ required: 'Contact number is a mandatory field' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label='Contact Number'
                      variant='outlined'
                      error={!!errors.contactNum}
                      helperText={touchedFields.contactNum && errors.contactNum ? errors.contactNum.message : ''}
                      fullWidth
                      sx={textFieldSx}
                    />
                  )}
                />
              </div>

              <div className='p-3'>
                <Controller
                  name='email'
                  control={control}
                  rules={{
                    required: 'Email is a mandatory field',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label='Email'
                      variant='outlined'
                      error={!!errors.email}
                      helperText={touchedFields.email && errors.email ? errors.email.message : ''}
                      fullWidth
                      sx={textFieldSx}
                    />
                  )}
                />
              </div>

              <div className='p-3'>
                <Controller
                  name='notes'
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label='Comments' variant='outlined' fullWidth multiline minRows={3} sx={textFieldSx} />
                  )}
                />
              </div>

              <Button
                variant='contained'
                type='submit'
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  mt: 1,
                  py: 1.3,
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  fontWeight: '600',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'none',
                  borderRadius: '10px',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7c3aed, #db2777)',
                  },
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
