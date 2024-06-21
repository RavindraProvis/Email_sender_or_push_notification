import axios from 'axios';
import pusherNotification from './pusherNotification';


export default async function emailPostApi(notificationDetails, email) {
    try {
        const response = await axios.post('http://localhost:5000/api/sendEmail', notificationDetails);

        if (response.status === 200) {
            pusherNotification(email, 'Email sent successfully!');
        } else {
            pusherNotification(email, 'Failed to send email.');
        }
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email.');
    }
}