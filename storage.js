// my-portal/storage.js
const Storage = (function(){

    // Reports
    function getReports(){ return JSON.parse(localStorage.getItem('qualityReports'))||[]; }
    function saveReports(reports){ localStorage.setItem('qualityReports', JSON.stringify(reports)); }
    function addOrUpdateReport(report){
        let reports = getReports();
        const existing = reports.find(r=>r.username===report.username && r.callDate===report.callDate);
        if(existing){ Object.assign(existing, report); } else { reports.push(report); }
        saveReports(reports);
    }
    function getReportsByLeader(leader){ return getReports().filter(r=>r.leader===leader); }
    function getReportsByAssociate(username){ return getReports().filter(r=>r.username===username); }

    // Users
    function getUsers(){ return JSON.parse(localStorage.getItem('users'))||[]; }
    function saveUsers(users){ localStorage.setItem('users', JSON.stringify(users)); }

    return { getReports, saveReports, addOrUpdateReport, getReportsByLeader, getReportsByAssociate, getUsers, saveUsers };
})();
