// JavaScript Document

(function(){

			var ghost = document.querySelector(".js-ghost");

			function getCanvasSizes(canvas){

				return {
					width: canvas.offsetWidth / 2,
					height: canvas.offsetHeight / 2
				};
			}

			function getCurrentEyesPositions(pointerPositions, canvasSizes){

				return {
					x: (pointerPositions.x - canvasSizes.width) * 100 / canvasSizes.width,
					y: (pointerPositions.y - canvasSizes.height) * 100 / canvasSizes.height
				};
			}

			function updateEyesPosition(pointerPositions){

				var canvasSizes = getCanvasSizes(document.body),
				currentEyesPositions = getCurrentEyesPositions(pointerPositions, canvasSizes);

				ghost.style.setProperty("--ghostEyePositionX", Math.ceil(currentEyesPositions.x) + "%");
				ghost.style.setProperty("--ghostEyePositionY", Math.ceil(currentEyesPositions.y) + "%");
			}

			document.body.addEventListener("mousemove", function(event){

				updateEyesPosition({
					x: event.clientX,
					y: event.clientY
				});
			});

			document.body.addEventListener("touchmove", function(event){

				updateEyesPosition({
					x: event.touches[0].clientX,
					y: event.touches[0].clientY
				});
			});
		})();