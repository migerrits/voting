'use strict';

/* Controllers */

var stocksplitApp = angular.module('stocksplitApp', []);

stocksplitApp.controller('splitListCtrl', function($scope) {

	$scope.clickFn = function() {
		//alert("got the click " + $('#splitDateTime').val() );
		
		$scope.events.push(
		{
			name: 'New Split',
			description: "Test new split",
			
			issuer: 'Acme',
			marketCap: 12345678,
			sharesOutstanding: 34567,
			documents: false,
			
			eventStatus: 'pending',
			
			splitType: $('#splitType').val(),
			ratio: $('#splitRatio').val(),
			date: $('#splitDateTime').val(),
			shareType: $('#splitShareType').val(),
			minPercentSharholders:  $('#splitMinPercentShareholders').val(),
			minPercentYes:  $('#splitMinPercentYes').val(),
			voters: 2000,
			votesYes: 0,
			votesNo: 0
		});
	};

  $scope.events = [
	{
		name: 'Split 1',
		description: "Test split 1",
		
		issuer: 'Dunder Mifflin',
		marketCap: 20000000,
		sharesOutstanding: 230000,
		documents: false,
		
		eventStatus: 'in progress',
		
		splitType: 'Stock Split',
		ratio: '2-for-1',
		date: '2016-05-11',
		shareType: 'Common B',
		minPercentSharholders: 80,
		minPercentYes: 51,
		voters: 1200,
		votesYes: 100,
		votesNo: 820
	},
	{
		name: 'Split 2',
		description: "Test split 2",
		
		issuer: 'Dunder Mifflin',
		marketCap: 150000000,
		sharesOutstanding: 5500000,
		documents: false,
		
		eventStatus: 'in progress',
		
		splitType: 'Stock Split',
		ratio: '2-for-1',
		date: '2016-04-01',
		shareType: 'Common A',
		minPercentSharholders: 80,
		minPercentYes: 51,
		voters: 1200,
		votesYes: 650,
		votesNo: 234
	},
		{
		name: 'Split 3',
		description: "Test split 3",
		
		issuer: 'Dunder Mifflin',
		marketCap: 200000,
		sharesOutstanding: 3000,
		documents: true,
		
		eventStatus: 'in progress',
		
		splitType: 'Stock Split',
		ratio: '2-for-1',
		date: '2016-02-29',
		shareType: 'Common A',
		minPercentSharholders: 80,
		minPercentYes: 51,
		voters: 1200,
		votesYes: 1,
		votesNo: 700
	}

  ];
});
