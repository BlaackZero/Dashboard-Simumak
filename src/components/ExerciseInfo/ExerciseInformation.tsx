import { useEffect } from "react";
import { useExercisesStore } from "../../store/exercises/useExercisesStore";
import { CardCenter } from "../CenterInfo/style";
import { IconTrafficLights } from "@tabler/icons-react";

export const ExerciseInformation = () => {

    const { exercisesInfo, fetchExercises } = useExercisesStore();

    useEffect(() => {
      const fetchExerciseData = async () => {
        if (exercisesInfo == null) {
          await fetchExercises();
        }
        console.log("Center Info", exercisesInfo);
      };
      fetchExerciseData();
    }, []);
  return (
    <CardCenter>
      <div className="info">
        <IconTrafficLights size={32} stroke={2}/>
        <h3>Ejercicios realizados</h3>
        <p>{exercisesInfo?.total_results}</p>
      </div>
    </CardCenter>
  )
}
