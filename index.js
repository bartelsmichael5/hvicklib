(function(window, _) {
  window.myLibraryName = window.myLibraryName || {
    numz: {
        getAngleDegrees(pointA, pointB) {
            const   
                distanceX = pointB.x - pointA.x,
                distanceY = pointB.y - pointA.y,
                radians = Math.atan2(distanceY, distanceX),
                degrees = radians * 180 / Math.PI;
            return degrees;
        },
        degreesToRadians(degrees) {
            return degrees * Math.PI / 180;
        },
        radiansToDegrees(radians) {
            return radians * 180 / Math.PI;
        }
    },
    phyz: {
        getDistance(pointA, pointB) {
            const
                distanceX = pointB.x - pointA.x,
                distanceY = pointB.y - pointA.y,
                distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            return distance;
        }
    },
  };
}(window, window._));