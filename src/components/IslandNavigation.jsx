import { Html } from "@react-three/drei";
import Button from "@mui/material/Button";

const IslandNavigation = ({
  islandRef,
  setCurrentStage,
  currentStage,
  setIsRotating,
}) => {
  const stageRotations = {
    1: 4.5,
    2: 2.5,
    3: 1.1,
    4: 5.65,
  };

  const goToNextStage = () => {
    if (!islandRef.current) return;

    const nextStage = currentStage >= 4 ? 1 : currentStage + 1;
    const targetRotation = stageRotations[nextStage];

    animateRotation(targetRotation, nextStage);
  };

  const goToPreviousStage = () => {
    if (!islandRef.current) return;

    const previousStage = currentStage <= 1 ? 4 : currentStage - 1;
    const targetRotation = stageRotations[previousStage];

    animateRotation(targetRotation, previousStage);
  };

  const animateRotation = (targetRotation, targetStage) => {
    if (!islandRef.current) return;

    setIsRotating(true);

    const startRotation = islandRef.current.rotation.y;
    let rotationDifference = targetRotation - startRotation;

    while (rotationDifference > Math.PI) {
      rotationDifference -= 2 * Math.PI;
    }
    while (rotationDifference < -Math.PI) {
      rotationDifference += 2 * Math.PI;
    }

    const duration = 1000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const currentRotation = startRotation + rotationDifference * easeProgress;
      islandRef.current.rotation.y = currentRotation;

      if (progress >= 0.8) {
        setCurrentStage(targetStage);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        islandRef.current.rotation.y = targetRotation;
        setCurrentStage(targetStage);
        setIsRotating(false);
      }
    };

    animate();
  };

  return (
    <>
      <Html position={[-8, -20, -30]} center>
        <Button
          variant="contained"
          onClick={goToPreviousStage}
          sx={{
            minWidth: "50px",
            height: "50px",
            borderRadius: "50%",
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          {"<"}
        </Button>
      </Html>

      <Html position={[8, -20, -30]} center>
        <Button
          variant="contained"
          onClick={goToNextStage}
          sx={{
            minWidth: "50px",
            height: "50px",
            borderRadius: "50%",
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          {">"}
        </Button>
      </Html>
    </>
  );
};

export default IslandNavigation;
