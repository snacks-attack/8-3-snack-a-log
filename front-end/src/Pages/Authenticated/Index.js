import AuthSnacks from "../../Components/Authenticated/Index/Snacks";

function Index({ user }) {
  return (
    <div className="Index">
      <AuthSnacks user={user} />
    </div>
  );
}

export default Index;
