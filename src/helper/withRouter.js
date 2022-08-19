import { useParams, useNavigate } from "react-router-dom";

export const withRouter = (Component) => (props) => {
  const navigate = useNavigate()
  const params = useParams();

  return <Component params={params} navigate = {navigate} />;
};
