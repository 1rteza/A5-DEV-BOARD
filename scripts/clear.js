
document.getElementById('Clear-btn').addEventListener('click', function () {
    document.getElementById('activity-log').innerHTML = `
        <div class="flex gap-3 items-center">
            <img class="w-6" src="assets/activity.png" alt="">
            <h2 class="text-lg font-semibold opacity-95">Activity Log</h2>
        </div>
        <button id="Clear-btn" class="btn bg-blue-600 text-yellow-50 rounded-lg">Clear History</button>
        <span class="text-3xl opacity-10">------------------</span>
    `;
});