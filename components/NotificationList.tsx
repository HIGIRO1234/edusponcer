import { Notification } from '@/lib/data';

interface NotificationListProps {
  notifications: Notification[];
}

export default function NotificationList({ notifications }: NotificationListProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
      {notifications.map((notification) => (
        <div key={notification.id} className="px-4 py-3">
          <h3 className="text-gray-800">{notification.title}</h3>
          <p className="text-gray-500 text-sm">{notification.date}</p>
        </div>
      ))}
    </div>
  );
}
