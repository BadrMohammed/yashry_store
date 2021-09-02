import { Button } from "reactstrap";

const Landing = ({ history }) => {
  return (
    <div className="page_container center landing_container">
      <div className="text-center">
        <h3 className="landing_title">Financial Solutions</h3>

        <Button
          className="mt-5 landing_btn"
          onClick={(e) => {
            e.preventDefault();
            history.push("/home");
          }}
        >
          Generate Business Plan
        </Button>
      </div>
    </div>
  );
};

export default Landing;
