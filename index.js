(function(window, _) {
  window.hvicklib = window.hvicklib || {
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
      makeBody: function(type, {
        velocityX = 0,
        velocityY = 0,
        rotationalVelocity = 0,
        integrity = 1,
        density = 1,
        volatility = 0
      } = {}) {
        if (type === undefined) throw new Error('You must provide a valid String for the type parameter!');
        return {
          type: type,
          velocityX: velocityX,
          velocityY: velocityY,
          rotationalVelocity: rotationalVelocity,
          integrity: integrity,
          density: density,
          volatility: volatility,

          handleCollision(impact, body) {
            // template method //
          },

          update(event) {
            // template method //
          }
        };
      },
        getDistance(pointA, pointB) {
            const
                distanceX = pointB.x - pointA.x,
                distanceY = pointB.y - pointA.y,
                distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            return distance;
        },
        updateVelocity(body, forceOnX, forceOnY) {
            const
                angle = body.rotation * Math.PI / 180,
                accelerationOnX  = Math.cos(angle) * forceOnX,
                accelerationOnY = Math.sin(angle) * forceOnY;
            body.velocityX += accelerationOnX;
            body.velocityY += accelerationOnY;
        },
        updatePosition(body) {
            body.x += body.velocityX;
            body.y += body.velocityY;
            body.rotation += body.rotationalVelocity;
        },
    },
  };
}(window, window._));