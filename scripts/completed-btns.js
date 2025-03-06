//card-fix
document.getElementById('fix-btn').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    let taskAssigned = document.getElementById('task-assigned').innerText;
    let convTaskAssigned = parseFloat(taskAssigned);
    console.log(typeof convTaskAssigned)
    convTaskAssigned -= 1;
    document.getElementById('task-assigned').innerText = '0'+ convTaskAssigned;

    let taskDone = document.getElementById('task-done').innerText;

    let convTaskDone = parseFloat(taskDone);

    convTaskDone += 1;

    document.getElementById('task-done').innerText = convTaskDone;
    const fixBtn = document.getElementById('fix-btn');
    fixBtn.disabled = true;

    const activityLog = document.getElementById('activity-log');
    const fixTitle = document.getElementById('fix-title').innerText;
    function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: true }); 
}
let completionTime = getCurrentTime();
    const p = document.createElement('p');
    p.innerText = `You have Completed the Task ${fixTitle} at ${completionTime}
    `
    p.classList.add('bg-slate-100', 'p-3', 'rounded-lg', 'text-sm')
    activityLog.appendChild(p);
    if(convTaskAssigned == 0){
        alert('Congrats!!! You have completed all the current tasks');
    }
    
})
document.getElementById('dark-btn').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    let taskAssigned = document.getElementById('task-assigned').innerText;
    let convTaskAssigned = parseFloat(taskAssigned);
    console.log(typeof convTaskAssigned)
    convTaskAssigned -= 1;
    document.getElementById('task-assigned').innerText = '0'+ convTaskAssigned;

    let taskDone = document.getElementById('task-done').innerText;

    let convTaskDone = parseFloat(taskDone);

    convTaskDone += 1;

    document.getElementById('task-done').innerText = convTaskDone;
    const darkBtn = document.getElementById('dark-btn');
    darkBtn.disabled = true;

    const activityLog = document.getElementById('activity-log');
    const darkTitle = document.getElementById('dark-title').innerText;
    function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: true }); 
}
let completionTime = getCurrentTime();
    const p = document.createElement('p');
    p.innerText = `You have Completed the Task ${darkTitle} at ${completionTime}
    `
    p.classList.add('bg-slate-100', 'p-3', 'rounded-lg', 'text-sm')
    activityLog.appendChild(p);
    if(convTaskAssigned == 0){
        alert('Congrats!!! You have completed all the current tasks');
    }
    
})
document.getElementById('optimize-btn').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    let taskAssigned = document.getElementById('task-assigned').innerText;
    let convTaskAssigned = parseFloat(taskAssigned);
    console.log(typeof convTaskAssigned)
    convTaskAssigned -= 1;
    document.getElementById('task-assigned').innerText = '0'+ convTaskAssigned;

    let taskDone = document.getElementById('task-done').innerText;

    let convTaskDone = parseFloat(taskDone);

    convTaskDone += 1;

    document.getElementById('task-done').innerText = convTaskDone;
    const optimizeBtn = document.getElementById('optimize-btn');
    optimizeBtn.disabled = true;

    const activityLog = document.getElementById('activity-log');
    const optimizeTitle = document.getElementById('optimize-title').innerText;
    function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: true }); 
}
let completionTime = getCurrentTime();
    const p = document.createElement('p');
    p.innerText = `You have Completed the Task ${optimizeTitle} at ${completionTime}
    `
    p.classList.add('bg-slate-100', 'p-3', 'rounded-lg', 'text-sm')
    activityLog.appendChild(p);
    if(convTaskAssigned == 0){
        alert('Congrats!!! You have completed all the current tasks');
    }
    
})
document.getElementById('emoji-btn').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    let taskAssigned = document.getElementById('task-assigned').innerText;
    let convTaskAssigned = parseFloat(taskAssigned);
    console.log(typeof convTaskAssigned)
    convTaskAssigned -= 1;
    document.getElementById('task-assigned').innerText = '0'+ convTaskAssigned;

    let taskDone = document.getElementById('task-done').innerText;

    let convTaskDone = parseFloat(taskDone);

    convTaskDone += 1;

    document.getElementById('task-done').innerText = convTaskDone;
    const emojiBtn = document.getElementById('emoji-btn');
    emojiBtn.disabled = true;

    const activityLog = document.getElementById('activity-log');
    const emojiTitle = document.getElementById('emoji-title').innerText;
    function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: true }); 
}
let completionTime = getCurrentTime();
    const p = document.createElement('p');
    p.innerText = `You have Completed the Task ${emojiTitle} at ${completionTime}
    `
    p.classList.add('bg-slate-100', 'p-3', 'rounded-lg', 'text-sm')
    activityLog.appendChild(p);
    if(convTaskAssigned == 0){
        alert('Congrats!!! You have completed all the current tasks');
    }
    
})
document.getElementById('integrate-btn').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    let taskAssigned = document.getElementById('task-assigned').innerText;
    let convTaskAssigned = parseFloat(taskAssigned);
    console.log(typeof convTaskAssigned)
    convTaskAssigned -= 1;
    document.getElementById('task-assigned').innerText = '0'+ convTaskAssigned;

    let taskDone = document.getElementById('task-done').innerText;

    let convTaskDone = parseFloat(taskDone);

    convTaskDone += 1;

    document.getElementById('task-done').innerText = convTaskDone;
    const integrateBtn = document.getElementById('integrate-btn');
    integrateBtn.disabled = true;

    const activityLog = document.getElementById('activity-log');
    const integrateTitle = document.getElementById('integrate-title').innerText;
    function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: true }); 
}
let completionTime = getCurrentTime();
    const p = document.createElement('p');
    p.innerText = `You have Completed the Task ${integrateTitle} at ${completionTime}
    `
    p.classList.add('bg-slate-100', 'p-3', 'rounded-lg', 'text-sm')
    activityLog.appendChild(p);
    if(convTaskAssigned == 0){
        alert('Congrats!!! You have completed all the current tasks');
    }
    
})
document.getElementById('improve-btn').addEventListener('click', function(event){
    alert('Board Updated Successfully');
    let taskAssigned = document.getElementById('task-assigned').innerText;
    let convTaskAssigned = parseFloat(taskAssigned);
    console.log(typeof convTaskAssigned)
    convTaskAssigned -= 1;
    document.getElementById('task-assigned').innerText = '0'+ convTaskAssigned;

    let taskDone = document.getElementById('task-done').innerText;

    let convTaskDone = parseFloat(taskDone);

    convTaskDone += 1;

    document.getElementById('task-done').innerText = convTaskDone;
    const improveBtn = document.getElementById('improve-btn');
    improveBtn.disabled = true;

    const activityLog = document.getElementById('activity-log');
    const improveTitle = document.getElementById('improve-title').innerText;
    function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: true }); 
}
let completionTime = getCurrentTime();
    const p = document.createElement('p');
    p.innerText = `You have Completed the Task ${improveTitle} at ${completionTime}
    `
    p.classList.add('bg-slate-100', 'p-3', 'rounded-lg', 'text-sm')
    activityLog.appendChild(p);
    if(convTaskAssigned == 0){
        alert('Congrats!!! You have completed all the current tasks');
    }
    
})

