import AuthNewSnack from "../../Components/Authenticated/New/NewSnack";

function New({ user }) {
  return (
    <div className="New">
      <AuthNewSnack user={user} />
    </div>
  );
}

export default New;
