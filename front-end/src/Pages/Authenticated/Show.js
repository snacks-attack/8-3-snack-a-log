import AuthSnack from "../../Components/Authenticated/Show/Snack";

function Show({ user }) {
  return (
    <div className="Show">
      <h2>Snacks</h2>
      <AuthSnack user={user} />
    </div>
  );
}

export default Show;
