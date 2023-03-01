const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="container-fluid text-center">
      <h1 className="py-2">Team Member Allocation</h1>
      <h4 className="text-muted">{selectedTeam} has {teamMemberCount} {teamMemberCount !== 1 ? 'Members' : "Member"}</h4>
    </header>
  )
}

export default Header