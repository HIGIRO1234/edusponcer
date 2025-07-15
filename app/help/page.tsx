export default function HelpPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Help & FAQ</h1>
      
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">How do I add a new student?</h3>
                <p className="text-gray-600">
                  Navigate to a specific school's dashboard and click the "Add a new student" button.
                  Fill in all the required information and submit the form.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">How do I update a student's status?</h3>
                <p className="text-gray-600">
                  Go to the Students page, find the student you want to update, and click on their
                  status badge. You can then change their sponsorship status.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">How do I view school-specific reports?</h3>
                <p className="text-gray-600">
                  Navigate to the Schools page, find the school you're interested in, and click the
                  "View" button. You'll find detailed statistics and reports on the school's dashboard.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">What do the different status badges mean?</h3>
                <p className="text-gray-600">
                  - Green "Sponsored" badge: Student has active sponsorship
                  - Red "Open" badge: Student needs sponsorship
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">Need More Help?</h2>
            <p className="text-gray-600">
              If you need additional assistance, please contact our support team at:
              support@edusponsor.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
