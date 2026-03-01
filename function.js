console.log('function working...')

//Jobs Counting
let allJobsCount = document.getElementById("all_count");
let allInterview = document.getElementById("interview_Count");
let allRejected = document.getElementById("rejected_Count");


// remove item from array by firstText
function removeFromArray(arr, title) {
    return arr.filter(item => item.firstText !== title);
}

// Update all pages
function updateAllSections() {
    filterSectionforInterview();
    filterSectionforReject();
    jobCounting();
}

let jobStatusText = document.getElementById("job_status_text");

function updateJobStatusText() {

    let total = allJobs.children.length;


    if (!allJobs.classList.contains("hidden")) {
        jobStatusText.innerText = `${total} jobs`;
    }


    else if (!filterSectionInterview.classList.contains("hidden")) {
        jobStatusText.innerText = `${interviewList.length} of ${total} jobs`;
    }

    
    else if (!filterSectionreject.classList.contains("hidden")) {
        jobStatusText.innerText = `${rejectlist.length} of ${total} jobs`;
    }
}
//------------------------------------

// total jobs length
let allJobs = document.getElementById('allJobs');
let length_of_jobs =  allJobs.children.length;
    updateJobStatusText();


//new array for interview and reject 
let interviewList = [];
let rejectlist = []

function jobCounting()
{
      let currentTotal = allJobs.children.length;

    allJobsCount.innerText = currentTotal;
    allInterview.innerText = interviewList.length;
    allRejected.innerText = rejectlist.length;

}

jobCounting()


// catch toggle button

let allPageButton = document.getElementById("all_page");
let interviewPageButton = document.getElementById("interview_page");
let rejectPageButton = document.getElementById("reject_page")
   
   
function toggleButton(id)
{
     allPageButton.classList.remove("btn-primary" , "btn-soft" , "text-primary")
     interviewPageButton.classList.remove("btn-primary", "btn-soft" , "text-primary")
     rejectPageButton.classList.remove("btn-primary", "btn-soft", "text-primary")

       allPageButton.classList.add("btn-soft" , "text-black")
     interviewPageButton.classList.add("btn-soft" , "text-black")
     rejectPageButton.classList.add("btn-soft" , "text-black")

 // when specific button click  -> active hobe 
    const selected = document.getElementById(id)
    selected.classList.remove("btn-soft" )
    selected.classList.add("btn-info", "border", "border-solid", "border-gray-300")


    if( id == "interview_page")
    {
        allJobs.classList.add("hidden");
                        filterSectionreject.classList.add('hidden')

        filterSectionInterview.classList.remove('hidden')

    }

        else if (id === "all_page") {

        allJobs.classList.remove("hidden");
        filterSectionInterview.classList.add("hidden");
                        filterSectionreject.classList.add('hidden')


    }

    else if ( id == 'reject_page')
    {
        allJobs.classList.add('hidden');
                filterSectionInterview.classList.add("hidden");
                filterSectionreject.classList.remove('hidden')


    }


    updateJobStatusText();

}

//card operation - interview 


allJobs.addEventListener("click" , function(e)
{
   if(e.target.classList.contains('interview'))
   {
            let parent_Node = e.target.parentNode.parentNode;
        let firstText = parent_Node.querySelector('.firstText').innerText 
        let secondtext =  parent_Node.querySelector('.secondtext').innerText 
        let ThirdText = parent_Node.querySelector('.ThirdText').innerText 
        let notApplied =  parent_Node.querySelector('.NotApplied').innerText  
        let fourthText =  parent_Node.querySelector('.fourthText').innerText
                parent_Node.querySelector('.NotApplied').innerText = "Interview"
    

        const cardInfo =
        {
            firstText ,
            secondtext ,
            ThirdText ,
            notApplied : "Interview",
            fourthText
        }

        //ekhon check korte hobe card ti koto ber ashche , multiple skip korte hobe

        let cardExist_interview = interviewList.find(items => items.firstText == cardInfo.firstText)


        if(!cardExist_interview)
        {
            interviewList.push(cardInfo)
            jobCounting()

        }

        //function call
        filterSectionforInterview();
   }
});

// Reject page

allJobs.addEventListener("click" , function(e)
{
    if (e.target.classList.contains('rejected'))
   {
          let parent_Node = e.target.parentNode.parentNode;
        let firstText = parent_Node.querySelector('.firstText').innerText 
        let secondtext =  parent_Node.querySelector('.secondtext').innerText 
        let ThirdText = parent_Node.querySelector('.ThirdText').innerText 
        let notApplied =  parent_Node.querySelector('.NotApplied').innerText  
        let fourthText =  parent_Node.querySelector('.fourthText').innerText
                parent_Node.querySelector('.NotApplied').innerText = "Rejected"
    

        const cardInfo =
        {
            firstText ,
            secondtext ,
            ThirdText ,
            notApplied : "Rejected",
            fourthText
        }

        //ekhon check korte hobe card ti koto ber ashche , multiple skip korte hobe

        let cardExist_ireject = rejectlist.find(items => items.firstText == cardInfo.firstText)


        if(!cardExist_ireject)
        {
            rejectlist.push(cardInfo)
            jobCounting()

        }

        //function call
        filterSectionforReject();  
   }
});


// interview page a selected card add korbo

const filterSectionInterview = document.getElementById("filter_Section_interview");

function filterSectionforInterview()
{
    filterSectionInterview.innerHTML= ""

    for( let items of interviewList)
    {
        console.log(items)
        let div1 = document.createElement('div');
        div1.className='mt-[20px] bg-base-100 flex flex-col items-start rounded-[25px] p-10 shadow-md space-y-3 '
        div1.innerHTML =
        `
         <div class="flex flex-row items-center w-full justify-between">
                <h1 class="firstText text-[20px] font-bold text-[#002C5C]">${items.firstText}</h1>

                <button type="button"
                    class="deleteBtn rounded-[50%] btn  btn-outline border border-solid border-[#E6E7E9] py-2 px-3">
                    <i class="fa-solid fa-trash"></i></button>
            </div>
            <p class="secondtext text-[#64748B] text-[14px]">${items.secondtext}</p>
            <p class="ThirdText text-[#64748B] text-[15px]">Remote • Full-time • $130,000 - $175,000</p>
            <!-- Change hobe ekhane -->
               <p  class="NotApplied border border-solid border-blue-300 p-1 text-[#002C5C] bg-[#EEF4FF]">${items.notApplied}
            </p>
            <p class="fourthText text-[#64748B] text-[15px]">${items.fourthText}</p>
            <div class=" card-actions justify-end">
                <!-- button id here -->
                <button class="interview btn btn-outline btn-success">INTERVIEW</button>
                <button class="rejected btn btn-outline btn-error">REJECTED</button>
            </div>
        
        `

            let result =  filterSectionInterview.appendChild(div1);
    console.log(result)

    }
 
}


//reject page selected

const filterSectionreject = document.getElementById("filter-Section_reject");

function filterSectionforReject()
{
    filterSectionreject.innerHTML= ""

    for( let items of rejectlist)
    {
        console.log(items)
        let div2 = document.createElement('div');
        div2.className='mt-[20px] bg-base-100 flex flex-col items-start rounded-[25px] p-10 shadow-md space-y-3 '
        div2.innerHTML =
        `
         <div class="flex flex-row items-center w-full justify-between">
                <h1 class="firstText text-[20px] font-bold text-[#002C5C]">${items.firstText}</h1>

                <button type="button"
                    class="deleteBtn rounded-[50%] btn  btn-outline border border-solid border-[#E6E7E9] py-2 px-3">
                    <i class="fa-solid fa-trash"></i></button>
            </div>
            <p class="secondtext text-[#64748B] text-[14px]">${items.secondtext}</p>
            <p class="ThirdText text-[#64748B] text-[15px]">Remote • Full-time • $130,000 - $175,000</p>
            <!-- Change hobe ekhane -->
               <p  class="NotApplied border border-solid border-blue-300 p-1 text-[#002C5C] bg-[#EEF4FF]">${items.notApplied}
            </p>
            <p class="fourthText text-[#64748B] text-[15px]">${items.fourthText}</p>
            <div class=" card-actions justify-end">
                <!-- button id here -->
                <button class="interview btn btn-outline btn-success">INTERVIEW</button>
                <button class="rejected btn btn-outline btn-error">REJECTED</button>
            </div>
        
        `

            let result = filterSectionreject.appendChild(div2);
    console.log(result)

    }
 
}



//-------------------------------

// Interview  theke reject 
// reject theke interview

document.addEventListener("click", function (e) {

    // From Interview → Reject
    if (e.target.classList.contains("rejected")) {

        let parent = e.target.closest(".bg-base-100");

        if (parent && filterSectionInterview.contains(parent)) {

            let title = parent.querySelector('.firstText').innerText;

            let item = interviewList.find(i => i.firstText === title);

            if (item) {
                // Remove from interview
                interviewList = interviewList.filter(i => i.firstText !== title);

                // Add to reject
                item.notApplied = "Rejected";
                rejectlist.push(item);

                jobCounting();
                filterSectionforInterview();
                filterSectionforReject();
            }
        }
    }


    // From Reject → Interview
    if (e.target.classList.contains("interview")) {

        let parent = e.target.closest(".bg-base-100");

        if (parent && filterSectionreject.contains(parent)) {

            let title = parent.querySelector('.firstText').innerText;

            let item = rejectlist.find(i => i.firstText === title);

            if (item) {
                // Remove from reject
                rejectlist = rejectlist.filter(i => i.firstText !== title);

                // Add to interview
                item.notApplied = "Interview";
                interviewList.push(item);

                jobCounting();
                filterSectionforReject();
                filterSectionforInterview();
            }
        }
    }

});

// Delete card from any page

document.addEventListener("click", function (e) {

    if (e.target.closest(".deleteBtn")) {

        let parent = e.target.closest(".bg-base-100");

        if (!parent) return;

        let title = parent.querySelector('.firstText').innerText;
        interviewList = interviewList.filter(i => i.firstText !== title);
        rejectlist = rejectlist.filter(i => i.firstText !== title);
     
        parent.remove();


        jobCounting();
            updateJobStatusText();

         filterSectionforInterview();

        filterSectionforReject();
    }

});



//
function jobCounting() {

    let currentTotal = allJobs.children.length;

    allJobsCount.innerText = currentTotal;
    allInterview.innerText = interviewList.length;
    allRejected.innerText = rejectlist.length;
}