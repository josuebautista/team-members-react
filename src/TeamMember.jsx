import TeamMemberCard from "./TeamMemberCard";

const TeamMember = ({ employees, handleEmployeeCardClick, selectedTeam }) => {
  return (
    employees.map((employee) => (
      <TeamMemberCard employee={employee} 
      handleEmployeeCardClick={handleEmployeeCardClick} 
      selectedTeam={selectedTeam}
      key={employee.id}
      />
    ))
  )
}

export default TeamMember;