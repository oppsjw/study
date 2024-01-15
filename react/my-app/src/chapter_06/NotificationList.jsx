import React from 'react';
import Notification from './Notification';

const reserveNotifications = [
    {
        id: 1,
        message: "안녕하세요. 곧 점심시간입니다.",
    },
    {
        id: 2,
        message: "점심먹고 12시 30분에 모이시죠.",
    },
    {
        id: 3,
        message: "아 오늘 샐러드 사갖고 왔는데....",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;

        timer = setInterval(() => {
            if (notifications.length < reserveNotifications.length) {
                const index = notifications.length;
                notifications.push(reserveNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification 
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;