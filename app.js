let TotalListsMain = document.querySelector('.TotalListsMain');
TotalListsMain.innerHTML = localStorage.getItem('InputValue');

function main_input_btn() {

    let MainInput = document.querySelector('.main_input');

    let newList = `
        <div class="flex items-center w-full justify-between rounded-[6px] h-[46px] bg-cyan-300 mt-[5px] px-[22px] totalLlist ">
            <div class="flex items-center gap-[9px] h-full w-full pr-[90px] ">
                <input class = "checkbox" type="checkbox" name="" onclick="checkbox(this)" id="">
                <input value="${MainInput.value}" class="text-[#000] text-[14px] italic flex-1 outline-none border-[0px] h-[76%] bg-transparent border-slate-500 px-[8px] rounded-[6px] input_edit " disabled type="text">
            </div>
            <div class="flex items-center gap-[12px] ">
                <div class="flex items-center justify-center cursor-pointer editIconMain " onclick="edit(this)" >
                    <i class="fa-solid text-[18px] text-[#000] editIcon fa-pen "></i>
                </div>
                <div class="flex items-center justify-center cursor-pointer " onclick="crossBtn(this)" >
                    <i class="fa-solid fa-xmark text-[20px] text-[#000] "></i>
                </div>
            </div>
        </div>
    `

    if (MainInput.value == '') {
        MainInput.classList.add('!border-red-400');
    }else{
        MainInput.classList.remove('!border-red-400');
        TotalListsMain.innerHTML = TotalListsMain.innerHTML + newList;
        // for (let TotalListsMain = 0; TotalListsMain < TotalListsMain.length; i++) {
        //     const element = TotalListsMain[i];
        //     localStorage.setItem('Input Data' , element.value);
        //     console.log(element)
        // }
        MainInput.value = '';
        localStorage.setItem('InputValue' , newList);
    }
}



// 
// 



function crossBtn(e) {
    let totalLlist = e.closest('.totalLlist')
    totalLlist.classList.add('!hidden');
    localStorage.clear()
}

let value = true


function edit(e) {
    let totalLlist = e.closest('.totalLlist');
    let input_edit = totalLlist.querySelector('.input_edit');
    let MainInput = document.querySelector('.main_input');
    let checkbox = totalLlist.querySelector('.checkbox');
    let editicon = totalLlist.querySelector('.editicon');
    let editMain = totalLlist.querySelector('.editIconMain');


    if (value == true) {
        input_edit.classList.add('!border-[1px]');
        input_edit.disabled = false;
        value = false;
        MainInput.disabled = true;
        // editicon.classList.add('hidden');
        editMain.innerHTML = `<i class="fa-solid fa-check text-[18px] text-[#000] "></i>`
        checkbox.classList.add('invisible');
        // editicon.classList.remove('!fa-pen')
        // editicon.classList.add('!fa-check');
    }else{
        input_edit.classList.remove('!border-[1px]');
        input_edit.disabled = true;
        value = true;
        MainInput.disabled = false;
        checkbox.classList.remove('invisible');
        editMain.innerHTML = `<i class="fa-solid fa-pen text-[18px] text-[#000] "></i>`
    }
}



function checkbox(e) {
    let totalLlist = e.closest('.totalLlist');
    let input_edit = totalLlist.querySelector('.input_edit');
    let editBtn = totalLlist.querySelector('.editIcon');

    if (value == true) {
        input_edit.classList.add('line-through');
        // editBtn.classList.add('!text-slate-400');
        editBtn.classList.add('invisible');
        value = false;
    }else{
        input_edit.classList.remove('line-through');
        // editBtn.classList.remove('!text-slate-400');
        editBtn.classList.remove('invisible');
        value = true;
    }
}