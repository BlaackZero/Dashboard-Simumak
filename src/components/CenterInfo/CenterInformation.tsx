import { useEffect } from "react";
import { useCenterStore } from "../../store/center/useCenterStore";
import { CardCenter } from "./style";
import { IconAffiliate, IconBuildingCommunity } from "@tabler/icons-react";

export const CenterInformation = () => {

  const { centerInfo, fetchCenterInfo } = useCenterStore();

  useEffect(() => {
    const fetchCenterData = async () => {
      if (centerInfo == null) {
        await fetchCenterInfo();
      }
      console.log("Center Info", centerInfo);
    };
    fetchCenterData();
  }, []);
  
  return (
    <CardCenter>
      <div className="info">
        <IconBuildingCommunity size={32} stroke={2}/>
        <h3>Centro Actual</h3>
        <p>{centerInfo?.name}</p>
      </div>
      <div className="info">
        <IconAffiliate size={32} stroke={2}/>
        <h3>Cantidad de Simuladores</h3>
        <p>{centerInfo?.simulators?.length}</p>
      </div>
    </CardCenter>
  )
}
