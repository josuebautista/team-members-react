import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const TeamMemberCard = ({ employee, handleEmployeeCardClick, selectedTeam}) => {
  return (
    <div className="col-4 py-2 d-flex justify-content-evenly">
      <div key={employee.id}  id={employee.id} className={(employee.teamName === selectedTeam ? "card w-80 standout" : "card w-80")} style={{ width: "15rem", cursor: 'pointer' }} onClick={handleEmployeeCardClick}>
        { employee.gender === "female" ?
          <img src={femaleProfile} className="card-img-top" alt='femaleProfile' /> :
          <img src={maleProfile} className="card-img-top" alt='maleProfile' />
        }
        <div className="card-body text-center">
          <p className="card-text ps-6"><strong>Full Name:</strong> {employee.fullName}</p>
          <p className="card-subtitle text-muted"><strong className='text-black'>Designation:</strong> {employee.designation}</p>
        </div>
        <div className="card-footer text-muted text-center">
          <p>{employee.teamName}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCard;