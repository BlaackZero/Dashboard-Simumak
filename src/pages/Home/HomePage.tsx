import { CenterInformation } from "../../components/CenterInfo/CenterInformation"
import { ExerciseInformation } from "../../components/ExerciseInfo/ExerciseInformation"
import { UsersInformation } from "../../components/UsersInfo/UsersInformation"
import { MainLayout } from "../../layout/MainLayout"
import { GridDashboard } from "./style"

export const HomePage = () => {
  return (
    <MainLayout>
      <GridDashboard>
        <CenterInformation/>
        <ExerciseInformation/>
        <UsersInformation/>
      </GridDashboard>
    </MainLayout>
  )
}
