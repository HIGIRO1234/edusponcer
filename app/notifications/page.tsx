import NotificationList from '@/components/NotificationList';
import { notifications } from '@/lib/data';

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Notifications</h1>
      <NotificationList notifications={notifications} />
    </div>
  );
}
