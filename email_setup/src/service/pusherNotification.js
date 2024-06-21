import Push from 'push.js'
const pusherNotification = (title, text) => {
    Push.create(title, {
        body: text,
        icon: '/icon.png',
        timeout: 4000,
        onClick: function () {
            window.focus();
            this.close();
        }
    });
}
export default pusherNotification;