import { useState } from "react"
const GroupedTeamMembers = ({ employee, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];
    var teamAMembers = employee.filter((employee) => employee.teamName === 'TeamA');
    var teamA = {team: 'TeamA', members:teamAMembers, collapse: selectedTeam === 'TeamA' ? false: true}
    teams.push(teamA);

    var teamBMembers = employee.filter((employee) => employee.teamName === 'TeamB');
    var teamB = {team: 'TeamB', members:teamBMembers, collapse: selectedTeam === 'TeamB' ? false: true}
    teams.push(teamB);

    var teamCMembers = employee.filter((employee) => employee.teamName === 'TeamC');
    var teamC = {team: 'TeamC', members:teamCMembers, collapse: selectedTeam === 'TeamC' ? false: true}
    teams.push(teamC);

    var teamDMembers = employee.filter((employee) => employee.teamName === 'TeamD');
    var teamD = {team: 'TeamD', members:teamDMembers, collapse: selectedTeam === 'TeamD' ? false: true}
    teams.push(teamD);
    
    return teams;
  }

  function handleTeamClick(event){
    var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? 
      {...groupedData, collapse:!groupedData.collapse}: groupedData);
    
      setGroupData(transformedGroupData);
      setTeam(event.currentTarget.id);
  }

  return (
    <main className="container py-2">
        {
          groupedEmployees.map((item) => {
            return (
              <div className="py-2">
                <div key={item.team} className='card' style={{cursor: 'pointer'}}>
                  <div id={item.team} className='card-header text-secondary bg-light' onClick={handleTeamClick}>
                    <div className="row d-flex justify-content-between">  
                      <div className="col-6 fs-4">
                        Team Name: {item.team}
                      </div>
                      <div className="col-6 dropdown-toggle text-end fs-4">
                      </div>
                    </div>
                  </div>
                  <div id={'collapse_' + item.team} className={item.collapse === true ? 'collapse' : ''}>
                    {
                      item.members.map((member) => {
                        return (
                          <div className="card-body">
                            <h5 className='card-title'>
                              <span className="text-dark">Full Name: {member.fullName}</span>
                            </h5>
                            <p className="card-text">Designation: {member.designation}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
    </main>
  )
}

export default GroupedTeamMembers