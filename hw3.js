
var n ;
n = 10000;
var bit = 32;
var node = [];
var nodeFingerTable = new Array(n);
for(var i = 0 ; i<n ;i++)
	nodeFingerTable[i] = new Array(bit);
//var intMax = 256;
var intMax = 4294967296;

//run();

function run(){
	createTopology();
	mapKeysToPeers();
	computeSearchHops();
};

function createTopology(){

	//產生ID
	for(var i = 0;i < n;i++){
		node[i]={};
		node[i].id = Math.floor(Math.random()*intMax);
		console.log(node[i]);
	};

	//排序
	node.sort(sortNumber);

	//紀錄successor和predecessor
	for(var i = 0 ; i < n ; i++){

		if(i==0){
			node[i].successor = node[i+1].id;
			node[i].predecessor = node[n-1].id; 
		
		}
		else if(i==n-1){
			node[i].successor = node[0].id;
			node[i].predecessor = node[n-2].id; 
		
		}

		else{
			node[i].successor = node[i+1].id;
			node[i].predecessor = node[i-1].id; 
		}
		
		console.log(i);
		console.log(node[i]);	
	}

	//產生finger table
	for(var i = 0 ; i < n ; i++){
		var previous = 0;
		for(var j = 0; j < bit ; j++){
			
			

			for(var k = previous ; k < n; k++){

				var tempOriginal = node[i].id+Math.pow(2,j);
				var temp = (node[i].id+Math.pow(2,j)) % intMax ;

				var nextPoint = (i + k) % n;
				console.log("node["+i+"]="+node[i].id+",j="+j+",temp"+temp +",k="+k+", nextPoint = "+nextPoint +" node["+nextPoint+"]="+node[nextPoint].id);
				
									var x;
									var y;
									var previousPoint

									if(tempOriginal>node[node.length]){
										if(tempOriginal > intMax){
											if(temp <node.id[0]){
												nodeFingerTable[i][j]=0;
												break;
											}
											else if(node.id)
										}
									}
									if(temp<node[y])
										previousPoint=y
										y = (x+y)/2
										if(temp>node[y-1])
											nodeFingerTable[i][j]=y;

									else if(temp >node[y])
										x = y
										y = (y+previousPoint)/2;
										if(temp<node[y+1])
											nodeFingerTable[i][j]=y+1;	
									else
										nodeFingerTable[i][j]=y;


				
					if(temp <= node[nextPoint].id){
						console.log( " find A "+nextPoint);
						nodeFingerTable[i][j] = nextPoint;
						if(i<nextPoint)
							console.log("i<nextPoint");
						else
							previous = 1;
						break;
					}

					else if(i>nextPoint){
						if((node[i].id+Math.pow(2,j))<intMax){
							console.log( " find B "+nextPoint);
							nodeFingerTable[i][j] = nextPoint;
							previous = 1 ;
							
							break;
						}
						
					}
				
			}
						
		}
	};

	for(var i =0 ; i < n ; i++){
		console.log(nodeFingerTable[i]);
	};
};


function mapKeysToPeers(){

};

function computeSearchHops(){

};



//排序函數
function sortNumber(a,b){
	return a.id - b.id
}

function binarySearch(){
	var y = node.length;
	var x = i;
	temp = node[y].id;

	// for(){
	// 	if(A<temp){
	// 		y=(x+y)/2;
	// 	}
	// 	else if(A>temp){
	// 		y;
	// 	}
	// }

}