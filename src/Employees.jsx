import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employees = ({ employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange }) => {

  return (
    <main className="container">
      <div className='row d-flex justify-content-center py-2'>
        <div className='col-8'>
          <div className="dropdown">
            <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectionChange}>
              <option value="TeamA">TeamA</option>
              <option value="TeamB">TeamB</option>
              <option value="TeamC">TeamC</option>
              <option value="TeamD">TeamD</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row ">
        {
          employees.map((employee) => (
            <div className="col-4 py-2 d-flex justify-content-evenly">
              <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? "card w-80 standout" : "card w-80")} style={{ width: "15rem" , cursor: 'pointer'}} onClick={handleEmployeeCardClick}>
                {employee.gender === "female" ?
                  <img src={femaleProfile} className="card-img-top" alt='femaleProfile' /> :
                  <img src={maleProfile} className="card-img-top" alt='maleProfile' />
                }
                <div className="card-body text-center">
                  <p className="card-text ps-6"><strong>Full Name:</strong> {employee.fullName}</p>
                  {/* <p className="card-text"><strong>Gender:</strong> {employee.gender}</p> */}
                  <p className="card-subtitle text-muted"><strong className='text-black'>Designation:</strong> {employee.designation}</p>
                </div>
                <div class="card-footer text-muted text-center">
                  <p>{employee.teamName}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Employees