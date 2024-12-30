document.addEventListener("DOMContentLoaded", function () {
  const splineViewer = document.getElementById("splineRobot");
  splineViewer.setAttribute("url", "https://prod.spline.design/3Jq15zPU8qOG7wWH/scene.splinecode");
   // Confirm the robot has loaded successfully
  splineViewer.addEventListener("load", function () {
    console.log("Spline robot loaded successfully!");
  });
});
