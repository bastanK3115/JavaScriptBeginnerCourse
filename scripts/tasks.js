// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):
function getFieldValues(usersData, key){
var finalArray=[]; 
for(var i=0;i<usersData.length;i++)
{
	finalArray[i]=usersData[i][key];//формирование массива 
}
var control=1;
while(control!=0)
{
	control=0;
	for(var i=0;i<finalArray.length-1;i++)
	{
	if (finalArray[i]>finalArray[i+1])
		{
			var buffer=finalArray[i];
				finalArray[i]=finalArray[i+1];  // стремная пузирьковая сортировка
				finalArray[i+1]=buffer;
				control++;
		}
	}
}
return finalArray;
}
var usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'AAAA', 'password' : 'MyNAmeIsBob' } // изменено для проверки - работает!
];
console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

// 2) Написать функцию, фильтрующую массив с использованием предиката:

var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x) 
{/* Проверка на чётность */
	if (x%2==0)
		{
			return x;
		}
}
console.log(numbers.filter(isEven)); // --> [2, 8, 34]

// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках
function makeArray(words)
{ 
    var wordsArray=[];
    var j=0,start=0,current=0;
	for(var i=0;i<words.length;i++)
	{
		if (words[i]==' ')
		{
		    current=i-start;
		    wordsArray[j]=words.substr(start,current);
		     start=i+1;
		    j++;
		}
		if(i==words.length)
		{
		    wordsArray[j]=words.substr(start);
		}
	}
	return wordsArray;
}

function findSimilarWords(firstLongString, secondLongString)
{
var firstWordsList=makeArray(firstLongString);
var secondtWordsList=makeArray(secondLongString);
for(var i=0;i<firstWordsList.length;i++)
{
	var j=0;
	while(j!=secondtWordsList.length)
		{
			if([j]==firstWordsList[i])
			{
				console.log(firstWordsList[i]);break;		
			}
			j++;	
		}
}	
}
var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and'];


// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:
function generateBroadcastAndNetworsAddresses(Ip, subnetM)
{
    var adress=[];
    var j=0,start=0,current=0;
  for(var i=0;i<Ip.length;i++)
	{
		if (Ip[i]=='.')
		{
		    current=i-start;
		    adress[j]=Number(Ip.substr(start,current));
		     start=i+1;
		    j++;
		}
		if(i==Ip.length-1)
		{
		    adress[j]=Number(Ip.substr(start));
		}
	}
	var mask=Math.pow(2,8) - Math.pow(2,32-subnetM)
	 mask=mask.toString(2);
	 var last=adress[3].toString(2);
     adress[3]=last&mask
     console.log(adress);
     var broad=adress;
     broad[3]=adress[3]+Math.pow(2,32-subnetM)-1;
 	return broad; // немного читерства
}
var IpAddress = '10.223.98.2';
var subnetMask = 28;
 console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)
function makeItClean(totalMessArray)
{
    var k=0;
    cleanArray=[]
    for (var i=0;i<totalMessArray.length;i++)
    {
        var current=totalMessArray[i];
        for(var j=0;j<current.length;j++)
        {
            var check=1;
            for(var z=0;z<k;z++)
            {
                if(current[j]==cleanArray[z])
                {
                    check=0;
                }
            }
            if(check!=0)
            {
                cleanArray[k]=current[j];
                k++;
            }
        }
    }
    return cleanArray;
}
var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']]; 

console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, undefined, true];// Не поняла, почему 99 не входит?
