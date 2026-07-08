import "./RecentActivity.css";

function RecentActivity() {

    const activities = [
        {
            id: 1,
            equipment: "Dell Latitude 5540",
            action: "Assigned",
            employee: "Sarah Chen",
            time: "2 hours ago"
        },
        {
            id: 2,
            equipment: "HP ProBook 450",
            action: "Returned",
            employee: "John Smith",
            time: "30 minutes ago"
        },
        {
            id: 3,
            equipment: "Lenovo ThinkPad",
            action: "Assigned",
            employee: "Michael Adams",
            time: "Yesterday"
        }
    ];

    return (

        <section className="recent-activity">

            <h2>Recent Activity</h2>

            {activities.map((activity) => (

                <div className="activity-card" key={activity.id}>

                    <h4>{activity.equipment}</h4>

                    <p>

                        {activity.action} to {activity.employee}

                    </p>

                    <small>{activity.time}</small>

                </div>

            ))}

        </section>

    );

}

export default RecentActivity;