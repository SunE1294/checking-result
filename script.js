document.getElementById('resultForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const studentId = document.getElementById('studentId').value;
    const semester = document.getElementById('semester').value;
    const resultDiv = document.getElementById('result');

    // ইনপুট ভেরিফিকেশন
    if (!studentId || !semester) {
        resultDiv.innerHTML = '<p class="error">Please enter all required fields.</p>';
        return;
    }

    // এখানে আমরা এখন শুধু ডেমো রেজাল্ট দেখাচ্ছি, পরে API দিয়ে আসল রেজাল্ট দেখাবো
    const demoData = `
        <h3>Result for ${studentId}</h3>
        <ul>
            <li><strong>Semester:</strong> ${semester.charAt(0).toUpperCase() + semester.slice(1)}</li>
            <li><strong>Course:</strong> Data Structures → Grade: A+</li>
            <li><strong>Course:</strong> Algorithms → Grade: A</li>
        </ul>
    `;

    resultDiv.innerHTML = demoData;
});