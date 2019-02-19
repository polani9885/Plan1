"use strict";
var ControlerPlannedTour = require("./controlerPlannedTour");
var ControlerPlannedTour1 = ControlerPlannedTour.ControlerPlannedTour;
var appPlanGoGo = angular.module('AppPlanGoGo', []);
appPlanGoGo.controller("ControlerPlannedTour", ControlerPlannedTour1);
