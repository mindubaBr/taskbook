#!/usr/bin/env node
'use strict';

class Util {
	constructor() {    
	
	}
  
	ConverterStringToDate(dateString) {
		var DividedDate = dateString.toString().split("/");
		var dueDate = new Date(DividedDate[2], DividedDate[1]-1, DividedDate[0]);
		return dueDate;
	}
	
	isInArray(value, array) {
	  return array.indexOf(value) > -1;
	}
}

module.exports = Util;