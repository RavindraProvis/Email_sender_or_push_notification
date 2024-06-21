// components/ContactForm.js
'use client'
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Stack } from '@mui/material';
import pusherNotification from '@/service/pusherNotification';
import emailPostApi from '@/service/emailPostApi';
const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // pusherNotification(subject, message);
        emailPostApi({ email, subject, message }, email)
    };

    return (
        <Container>
            <Typography textAlign={'center'} variant='h1'>EMAIL SENDER</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Subject"
                        variant="outlined"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <Button fullWidth type="submit" variant="contained" color="primary">
                        Send Email
                    </Button>
                    <Button onClick={() => pusherNotification("Ravindra Gedhar", "Hello! How are you?")} variant="contained" color="primary">
                        Push Notification
                    </Button>
                </Stack>
            </form>
        </Container>
    );
};

export default ContactForm;
