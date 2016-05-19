'use strict';

/* Controllers */

var targetRow = null;

var votingApp = angular.module('votingApp', []);

votingApp.controller('voteListCtrl', function($scope) {

	// record the vote
	$scope.voteFn = function(voted) {

//					alert("vote: " + voted );
//					alert("target row: " + targetRow);
		
		// do something here to record the vote in the blockchain...
		
		// update the array for display purposes
		$scope.votes[targetRow].shareholderVoted = true;

		if (voted) {
			$scope.votes[targetRow].votesYes++;
		}
		else {
			$scope.votes[targetRow].votesNo++;
		}

		/*
		// Add another row just to test more
		$scope.votes.push(
		{
			name: 'New Split',
			description: "Test new split",
			
			issuer: 'Acme',
			marketCap: 12345678,
			sharesOutstanding: 34567,
			documents: false,
			
			eventStatus: 'pending',
			
			splitType: 'Stock Split',
			ratio: '2:1',
			date: '2016-05-11',
			shareType: 'Common B',
			minPercentSharholders: 80,
			minPercentYes: 51,
			voters: 2000,
			votesYes: 0,
			votesNo: 0,
		
			shareholderVoted: false
		});
		*/

	};

	// which row was clicked for voting
	$scope.rowSetFn = function(id) {
		targetRow = id;
	};

  $scope.votes = [
	{
		name: 'Split 0',
		description: "Test split 0",
		
		issuer: 'Dunder Mifflin',
		marketCap: 20000000,
		sharesOutstanding: 230000,
		documents: false,
		
		eventStatus: 'in progress',
		
		splitType: 'Stock Split',
		ratio: '2:1',
		date: '2016-05-31',
		shareType: 'Common A',
		minPercentSharholders: 80,
		minPercentYes: 51,
		voters: 1200,
		votesYes: 20,
		votesNo: 20,
		
		shareholderVoted: false
		
	},
	{
		name: 'Split 1',
		description: "Test split 1",
		
		issuer: 'Dunder Mifflin',
		marketCap: 20000000,
		sharesOutstanding: 230000,
		documents: false,
		
		eventStatus: 'in progress',
		
		splitType: 'Stock Split',
		ratio: '2:1',
		date: '2016-05-20',
		shareType: 'Common B',
		minPercentSharholders: 80,
		minPercentYes: 51,
		voters: 1200,
		votesYes: 100,
		votesNo: 820,
		
		shareholderVoted: false
		
	},
	{
		name: 'Split 2',
		description: "Test split 2",
		
		issuer: 'Dunder Mifflin',
		marketCap: 150000000,
		sharesOutstanding: 5500000,
		documents: false,
		
		eventStatus: 'completed',
		
		splitType: 'Stock Split',
		ratio: '2:1',
		date: '2016-04-01',
		shareType: 'Common A',
		minPercentSharholders: 80,
		minPercentYes: 51,
		voters: 1200,
		votesYes: 650,
		votesNo: 234,
		
		shareholderVoted: true
	},
		{
		name: 'Split 3',
		description: "Test split 3",
		
		issuer: 'Dunder Mifflin',
		marketCap: 200000,
		sharesOutstanding: 3000,
		documents: true,
		
		eventStatus: 'completed',
		
		splitType: 'Stock Split',
		ratio: '2:1',
		date: '2016-02-29',
		shareType: 'Common A',
		minPercentSharholders: 80,
		minPercentYes: 51,
		voters: 1200,
		votesYes: 1,
		votesNo: 700,
		
		shareholderVoted: true

	}

  ];
});

