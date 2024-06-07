import { useEffect } from "react";
import { useUsersStore } from "../../store/users/useUsersStore";
import { CardCenter } from "../CenterInfo/style";
import { IconUserPentagon } from "@tabler/icons-react";

export const UsersInformation = () => {

    const { usersInfo, fetchUsers } = useUsersStore();

    useEffect(() => {
      const fetchUsersData = async () => {
        if (usersInfo == null) {
          await fetchUsers();
        }
        console.log("Center Info", usersInfo);
      };
      fetchUsersData();
    }, []);
  return (
    <CardCenter>
      <div className="info">
        <IconUserPentagon size={32} stroke={2}/>
        <h3>Cantidad Usuarios</h3>
        <p>{usersInfo?.total_results}</p>
      </div>
    </CardCenter>
  )
}
