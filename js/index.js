function loadSkills(skills){
        var i=0,j;
        var skillsInnerHTML='';
        while(i<skills.length){
            var row = '<div class="row">';
            for(j=i;j<i+6&&j<skills.length;j++){
                var skill = '<div class="col m2"><svg viewBox="0 0 128 128"><path d="'+skills[j].icon+'"></path></svg>'+skills[j].name+'</div>';
                row+=skill;
                
            }
            row+='</div>';
            skillsInnerHTML+=row;
            
            i=j;
        }
        $('#skills').html(skillsInnerHTML);
}

function loadProjects(projects){
    projects.sort(function(a,b){
        return a.sn-b.sn;
    });
    var i=0,j;
    var projectsInnerHTML='';
    for(i=0;i<projects.length;i++){
        project = ' <div class="row project"><div class="col m6 s12"><div class="row"><span class="title">'+projects[i].projectTitle+'</span><hr></div><div class="row"><span>'+projects[i].periodStart+'-'+projects[i].periodEnd+'</span></div>';
        toolsUsed = '<div class="row">Tools Used:&nbsp';
        for(j=0;j<projects[i].toolsUsed.length;j++){
            toolsUsed+='<span>'+projects[i].toolsUsed[j]+'</span>&nbsp';
        }
        toolsUsed+='</div>';
        project+=toolsUsed;
        tags = '<div class=row">'
        for(j=0;j<projects[i].tags.length;j++)tags+='<span class="tag">#'+projects[i].tags[j]+'</span>&nbsp';
        if(projects[i].link!="#") tags+='<a href="'+projects[i].link+'" target="_blank"><i class="material-icons right">language</i></a>';
        tags+='</div>';
        project+=tags;
        project+='</div><div class="col m6 s12 details">'+projects[i].shortInfo+'</div></div>';
        projectsInnerHTML+=project;
    }
    $('#projects').html(projectsInnerHTML);
}

function loadWorks(experince){
    experince.sort(function(a,b){
        return a.sn-b.sn;
    });
    var i;
    var works = experince.filter((experince)=>experince.type=="work");
    var worksInnerHTML = '';
    for(i=0;i<works.length;i++){
        worksInnerHTML+=`
        <div class="row work">
            <div class="row title">
                <a href="${works[i].link}">${works[i].organisation}</a> |
                ${works[i].workPosition} |
                ${works[i].periodStart} - ${works[i].periodEnd}
            </div>
            <hr/>
            <div class="row details">
                ${works[i].experience}
            </div>
        </div>`;
    }
    $('#experience').html(worksInnerHTML);
}

function loadEducations(educations){
    var i=0,j;
    var educationsInnerHTML = '';
    for(i=0;i<educations.length;i++){
        education = '<div class="row education"><div class="col m12 s12"><div class="row title">'+educations[i].course+'<hr></div><div class="row">'+educations[i].periodStart+'-'+educations[i].periodEnd+'</div><div class="row">'+educations[i].inst+'</div><div class="row">'+educations[i].board+'</div><div class="row">'+educations[i].score+'</div></div><div class="col m6 s12 details"><ul class="collapsible" data-collapsible="accordion"><li><div class="collapsible-header"></li></ul></div></div>';
        educationsInnerHTML+=education;
	}
    $('#education').html(educationsInnerHTML);
}

function loadLinks(profileLinks){
    var i=0,j;            
    profileLinks.sort(function(a,b){
        return a.sn-b.sn;
    });
    var profileLinksInnerHTML = '';
    while(i<profileLinks.length){
        profileLinksInnerHTML+='<div class="row">'
        for(j=i;j<profileLinks.length&&j<i+5;j++){
            profileLinksInnerHTML+='<div class="col s2"><a href="'+profileLinks[j].link+'" target="_blank" ><img src="img/'+profileLinks[j].icon+'" alt="'+profileLinks[j].name+'"></a></div>';
        }
        profileLinksInnerHTML+='</div>';
        i=j;
    }
    $('#links').html(profileLinksInnerHTML);
}

function loadLikes(likes){
    likes = likes.sort(function(a,b){
        return a.sn-b.sn;
    });
    var i;
    var likesInnerHTML = '<h4>I like</h4>';
    for(i=0;i<likes.length;i++){
        likesInnerHTML+='<object type="image/svg+xml" data="img/'+likes[i].icon+'">'+likes[i].name+'</object>'
    }
    $('#likes').html(likesInnerHTML);
}

function loadBlog() {
    var blogHtml = `<div class='sk-ww-medium-publication-feed' data-embed-id='26322'></div><script src='https://www.sociablekit.com/app/embed/medium-publication-feed/widget.js'></script>`;
    $('#blog').html(blogHtml);    
}

function onBodyLoad(){
    $('div.progress').css('display','none');
    $('div.content').css('display','block');
    $('.collapsible').collapsible({
        'accordion' : true
    });
    //$('#tabs').tabs({ 'swipeable': true });
    //onWindowResize();
}

function onWindowResize(){
    const heightPageA = parseInt($('#pagea').css('height').replace('px',''),10);
    const tabContentHeight = Math.max(heightPageA-48,(window.innerHeight - 50)) + 'px';
    const tabs = document.getElementsByClassName('tabs-content carousel initialized');
    if (tabs && tabs[0]) {
        tabs[0].style.height = tabContentHeight;
    }
    $('#skills div.m2').css('height',$('#skills div.m2').css('width'));
    $('#image img').css('height',$('#image img').css('width'));
}

$(window).resize(onWindowResize);

swal({
    title: "Hello World!!!",
    text: "좌측 상단 재생해주세요, 저의 열정입니다."
});

const profile = {
    "personalInfo": {
        "fname": "김",
        "mname": "",
        "lname": "민성",
        "nick": "pino",
        "email": "developerPino@gmail.com",
        "mob": "+82 010 4428 7228"
    },
    "educations": [{
            "periodStart": "March 1990",
            "periodEnd": "February 2002",
            "course": "유년기 시절",
            "score": "<img src='./img/1994_01.jpg'/><img src='./img/1994_02.jpg'/><img src='./img/1994_03.jpg'/><img src='./img/1995_01.jpg'/><img src='./img/1996_01.jpg'/><img src='./img/1997_01.jpg'/>",
            "inst": "경기도 부천에서 초,중,고 모두 졸업",
            "board": "<p>장롱 한켠에 학년별 성적표와 상장들이 가득하네요! 그중에 몇가지 추려 보았습니다.</p>",
            "courses": []
        },
        {
            "periodStart": "March 2008",
            "periodEnd": "February 2010",
            "course": "대학 시절",
            "score": "",
            "inst": "부천 대학",
            "board": "<p>조금 늦은 나이에 입학하여 정말 열심히 공부 했습니다. 전학기 장학금을 받았고, 1학기 때는 전과목 A+를 받아 너무 기뻐 찍어놓았던 사진이 아직도 있네요!</p><p><img src='./img/allAplus.jpg' /></p>",
            "courses": []
        },
        {
            "periodStart": "March 2012",
            "periodEnd": "February 2014",
            "course": "두번째 대학 시절",
            "score": "",
            "inst": "방송 통신 대학교 컴퓨터 과학 전공",
            "board": "<p>학사까지는 해보고 싶었기에, 일을 하면서 틈틈히 공부하여 졸업했습니다!</p>",
            "courses": []
        }
    ],
    "skills": [
        {
            "sn": 3,
            "name": "JavaScript",
            "icon": "M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
        },
        {
            "sn": 4,
            "name": "PHP",
            "icon": "M64 33.039c-33.74 0-61.094 13.862-61.094 30.961s27.354 30.961 61.094 30.961 61.094-13.862 61.094-30.961-27.354-30.961-61.094-30.961zm-15.897 36.993c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515-.759 1.357-1.75 2.624-2.972 3.748zm21.311 2.968l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528l-3.031 15.241h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zM38.934 54h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458s-2.772-1.721-5.546-1.721z"
        },
        {
            "sn": 5,
            "name": "MySQL",
            "icon": "M125.477 122.783l-2.616-2.537c-2.479-3.292-5.668-6.184-9.015-8.585-2.669-1.916-8.661-4.504-9.775-7.609l-.205-.195c1.893-.214 4.103-.898 5.85-1.367 2.934-.786 5.356-.583 8.386-1.365 1.366-.39 2.899-.781 3.899-1.171v-.78c-1-1.571-2.427-3.651-4.097-5.073-4.369-3.72-9.041-7.437-13.951-10.537-2.723-1.718-6.041-2.835-8.926-4.292-.971-.491-2.652-.746-3.294-1.562-1.517-1.932-2.328-4.382-3.498-6.633-2.449-4.717-4.849-9.868-7.019-14.831-1.48-3.384-2.443-6.72-4.289-9.756-8.86-14.567-18.395-23.358-33.167-32-3.145-1.838-6.929-2.563-10.929-3.513-2.144-.129-4.291-.26-6.437-.391-1.311-.546-2.674-2.149-3.902-2.927-4.896-3.092-17.449-9.817-21.074-.975-2.289 5.581 3.42 11.025 5.462 13.854 1.435 1.982 3.27 4.207 4.293 6.438.675 1.467.79 2.938 1.367 4.489 1.418 3.822 2.651 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.95 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.898 21.567 2.537 28.683 1.36 2.186 4.566 6.871 8.975 5.073 3.856-1.57 3.226-6.438 4.329-10.732.249-.972-.185-1.688.815-2.341v.195c1 2.341 2.11 4.683 3.282 7.024 2.6 4.187 6.889 8.562 10.798 11.514 2.027 1.531 3.92 4.177 5.92 5.073v-.101h.221c-.507-1-1.302-1.167-1.95-1.804-1.527-1.496-3.226-3.382-4.487-5.097-3.556-4.827-6.698-10.122-9.561-15.622-1.368-2.626-2.557-5.529-3.709-8.201-.443-1.03-.438-2.592-1.364-3.125-1.263 1.958-3.122 3.54-4.099 5.853-1.561 3.696-1.762 8.204-2.341 12.877-.343.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.555-6.07-3.029-15.843-.781-22.829.582-1.809 3.211-7.501 2.146-9.172-.508-1.665-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.123-5.464-2.091-4.731-3.066-10.044-5.268-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.684-6.635-.445-.968-1.051-2.518-.39-3.513.21-.671.507-.951 1.171-1.17 1.133-.873 4.283.29 5.463.779 3.129 1.3 5.741 2.5 8.392 4.256 1.271.844 2.559 1.89 4.097 2.89h1.756c2.747 0 5.824.232 8.391 1.012 4.535 1.379 8.6 3.542 12.292 5.873 11.246 7.102 20.441 17.22 26.732 29.278 1.012 1.942 1.45 3.799 2.341 5.858 1.798 4.153 4.064 8.428 5.853 12.489 1.786 4.053 3.526 8.142 6.05 11.514 1.327 1.772 6.451 2.724 8.78 3.709 1.633.689 4.308 1.409 5.854 2.34 2.953 1.782 5.814 3.904 8.586 5.855 1.384.974 5.64 3.114 5.853 4.878-6.863-.188-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.069 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.576 2.751 5.464 3.902 3.359 2.047 7.107 3.217 10.341 5.268 1.906 1.21 3.958 2.733 5.815 4.097.92.675.891 1.724 2.891 2.147v-.194c-.999-.795-.946-1.893-1.522-2.728zM29.514 23.465c-1.431-.027-2.514.157-3.514.389v.146h.198c.683 1 1.888 2.33 2.731 3.538l1.952 4.108.193-.187c1.209-.853 1.763-2.211 1.756-4.291-.483-.509-.556-1.146-.974-1.754-.558-.809-1.639-1.268-2.342-1.949z"
        },
        {
            "sn": 6,
            "name": "Elastic Search",
            "icon": "M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618-1.968 2.588-3.935 5.176-5.901 7.763-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383 2.427-2.917 4.515-6.101 6.191-9.516 1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01"
        },
        {
            "sn": 7,
            "name": "Apache",
            "icon": "M127.6 75.9l-.3-.5-.2-.1v-.4l-.1-.4-.2-.3-.4-.2h-.1l-.1-.2-.3-.2-.3-.2-.4-.1h-.2l-.4-.4-.5-.3-.6-.3-.6-.2h-.2l-.5-.6-.6-.4-.6-.3-.6-.2h-.1l-.6-.4-.8-.3-.5-.1-.5-.4-.5-.2-.5-.1-.5-.1h-.5l-.6.1h-.1l-.4-.6-.6-.4-.8-.2h-.9l-1 .2-.4.1-.8-.3-.8-.2h-2.6000000000000005l-1-.4-.9-.3-.9-.1h-.6l-.8-.8-.9-.6-.8-.4-.8-.2h-.8l-.4.3-.5-.4-.6-.3-.7-.1-.6.1-.7-.3-.7-.2h-1l-1.1-.4-1.2-.3-1.1-.1h-.2l-1.2-.7-1.2-.3h-1.1.1l-1.7-.4-1.1-.1h-.5l-.7-.7-.8-.5-.9-.2-.9.1-.6.2-.8-.1h-1.8000000000000003v-.2l-1.4-.3-1.4-.2-1.3-.1-.5.1v-.1l-1-.1-1-.1h-.1l-1.1-.5-1.1-.3-1-.1h-.8l-1.1-.4-.9-.2h-1l-1.1-.8-.9-.3-.7-.1-.8-.4-1.2-.2h-1.1l-1.1-.5-1-.2h-.6l-1.2-.6-1-.3-1-.1-.3.1h.1l-1.4-.8-1.1-.4-1-.1h-.1l-.7-.5-.6-.3-.6-.2-.7-.1-.7.1-.8-.6-.7-.3-.9-.1h-.8l-.9.2-.2.1-1-.5-1-.3h-.9l-.8-.5-.7-.3h-.8l-.7.1-.7.2h-.1l-.7-.7-.6-.4-.7-.1-.7.1-.6.3-.2-.1-.3-.2-.3-.1-.3-.1h-.7l-.3.1-.5.3-.1.1-.9-.2h-.8l-.7.2-.6.5-.4.5-.3.7-.3.8-.2.8-.1.8-.1 1.6.1 1.8v.3c-.5-.2-1-.4-1.6-.6v-.4l.1-.6.1-1.3.1-1.2-.1-1.2-.1-.6-.1-.5-.1-.5-.2-.5-.2-.4-.3-.4-.3-.4-.6-.5.2.9.1.6.1.6.1.5.1.6.1.5v.1-.1l-.1-.3-.1-.3-.2-.6-.3-1-.1-.3-.2-1.3v-.4l.1-.7.1-.3.2-.7h-.2l-.5.6-.3.7-.3.7-.1.6v1.4l.1.7.1.7-.1-.1-.3-.4-.3-.4-.2-.5-.2-.5-.2-.5-.1-.7-.1-1-.7.6-.3.6-.2.6v.6l.1.6.2.6.3.6.1.2-.2.2-.6-.1-.1.2.4.2.4.3 1 .8.3.3.5.6.5.5.5.5.4.4.3.4.2.2c-5.7-2.3-11.7-5-19.1-8.5l-.4-.2.2.4c1 1.7 3.9 3.4 6.4 5 1.2.7 2.3 1.4 3.1 2 2.4 1.3 5.6 2.7 8.4 3.8h-.2l-2 .4-1.4.3-1.4.5-.7.3-.7.2-.6.4-.5.4-.5.5-.4.5-.3.6-.2.7.2.1.2-.2.5-.5.2-.2.6-.4.3-.2.3-.2.6-.3.4-.1.3-.1.7-.2.7-.1.6-.2 1.3-.7.6-.4.6-.4.5-.3.4-.2.3-.1.6.2-2.4 1.2-1.3.8-.7.5-.6.5-.6.5-.5.6-.3.5-.2.6-.1.6.1.7.4.9.5-1 .4-.6.4-.5.4-.4.4-.3.9-.6.4-.2-.1.4-.2.8v.9l.1 1 .3 1.1h.2l.2-1.1.3-1 .2-.5.4-.9.5-.9.8-1.4 1.1-1.8c.4.2.8.3 1.2.4l-.1.2-.7 1.4-.4.6-.3.7-.1.7-.2.7-.1.7v.7l.1.6.3.6.5.5.7.4.8.3.3.6.4.5.4.4.4.3.4.2.4.1h1v.1l.4.6.6.5.7.3h.8l.8-.2.2.2.6.6.6.4.7.3.8.1h.6l.6.4.7.3.8.2.6.5.8.4 1 .2 1.1.1h.2l.7.6.8.4.7.3.8.1.9-.2.4.2.6.3.6.1h.6l.6-.1.3.2 1 .3 1.1.1 1.3-.1.4.2.9.3 1 .1 1.4-.1h.1l.9.3 1 .1 1.1-.1.4.3 1 .4 1 .1 1.1-.1v-.1l.6.2h1l1.1-.2.7.2h.8l.8-.1 1.1.2.3.2 1 .3 1 .2 1.1.1 1.1-.1v-.1l.6.2.9.1.9.1v-.1l.6.2 1.2.4 1.3.3 1.4-.3v-.1h.2l.9.2.8.1h.9l.1.1.8.6.8.4h1.3l.8-.4.7-.6.9.1 1.1-.1h1.2v.1l.3.2 1.1.2 1.1-.1 1.1-.5h1l1.2.1 1-.1.6.1h1.4l.9-.1.5.2.6.1.6-.1.6-.3.1.1.8.1h2.5l.8-.3 1.1-.4h1.6l.8-.1.5.2.8.2.8.1.8-.1.9-.2.2.1.9.4.8.3h.8l.6-.3.5-.5.3.1.5.1.5.1h.5l.5-.1.5-.2.7.1.8-.1.7-.3h.7l.6-.1.6-.3.5-.4.1-.1.6.1.6-.1.5.1h.8999999999999999l.4-.3.3-.2.1-.2h.1l.3-.1.3-.2.2-.5.1-.6h.2l.3-.1.1-.3.1.1v-.7zm-107-16.3l.2-.5.3.1-.2.2-.3.2zm.6-6.8l.1.5.1.5.1.5.3 1.6.2.7-.4-.2h.1l-.2-.1-.5-.4v-2.4l.1-.8.1.1z"
        },
        {
            "sn": 8,
            "name": "Git",
            "icon": "M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"
        },
        {
            "sn": 10,
            "name": "Ubuntu",
            "icon": "M64 3.246c-33.555 0-60.755 27.2-60.755 60.754 0 33.552 27.2 60.754 60.755 60.754 33.554 0 60.755-27.202 60.755-60.754 0-33.554-27.2-60.754-60.755-60.754zm13.631 20.922c2.242-3.881 7.2-5.21 11.08-2.972 3.88 2.242 5.208 7.2 2.966 11.08-2.238 3.88-7.197 5.208-11.077 2.967-3.877-2.239-5.206-7.198-2.969-11.075zm-13.631 4.595c3.262 0 6.417.453 9.414 1.281.529 3.259 2.463 6.262 5.548 8.042 3.079 1.775 6.642 1.953 9.725.789 5.998 5.898 9.901 13.919 10.47 22.854l-11.558.17c-1.067-12.103-11.222-21.593-23.599-21.593-3.565 0-6.948.792-9.98 2.203l-5.637-10.099c4.708-2.33 10.01-3.647 15.617-3.647zm-41.311 43.349c-4.482 0-8.113-3.632-8.113-8.112 0-4.481 3.63-8.113 8.113-8.113 4.479 0 8.111 3.631 8.111 8.113 0 4.479-3.632 8.112-8.111 8.112zm7.191.722c2.561-2.09 4.2-5.271 4.2-8.834 0-3.565-1.639-6.747-4.2-8.836 2.194-8.489 7.475-15.738 14.571-20.483l5.931 9.934c-6.092 4.287-10.074 11.369-10.074 19.385s3.981 15.098 10.074 19.383l-5.931 9.937c-7.099-4.744-12.38-11.995-14.571-20.486zm58.831 33.964c-3.879 2.241-8.838.912-11.077-2.969-2.241-3.877-.911-8.835 2.969-11.076 3.877-2.239 8.838-.908 11.077 2.969 2.24 3.88.91 8.839-2.969 11.076zm-.024-17.673c-3.083-1.166-6.645-.991-9.725.788-3.084 1.783-5.019 4.782-5.547 8.042-2.998.83-6.153 1.284-9.415 1.284-5.607 0-10.909-1.318-15.616-3.649l5.636-10.1c3.032 1.411 6.415 2.204 9.98 2.204 12.378 0 22.532-9.488 23.596-21.592l11.561.169c-.569 8.935-4.472 16.956-10.47 22.854z"
        },
        {
            "sn": 11,
            "name": "HTML5",
            "icon": "M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"
        },
        {
            "sn": 12,
            "name": "jQuery",
            "icon": "M65.283 106.928c-.828-.187-1.633-.446-2.441-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.388-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.238-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.173-.646-1.751-.982l-.591-.33c-.769-.452-1.529-.921-2.28-1.397l-.615-.41c-.546-.351-1.088-.709-1.623-1.079l-.523-.367c-.516-.365-1.026-.734-1.534-1.109l-.679-.514c-.464-.355-.927-.713-1.384-1.082l-.617-.495c-.581-.479-1.156-.959-1.724-1.453l-.188-.159c-.614-.539-1.217-1.092-1.812-1.647l-.51-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.599-1.69l-.078-.084c-.553-.604-1.092-1.221-1.621-1.844l-.424-.504c-.395-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.804-58.204l-8.611 10.921c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.411.801.617 1.198l.395.759.245.437.439.786c.262.461.53.92.805 1.379l.458.756c.304.491.615.976.934 1.46l.398.614c.438.655.888 1.309 1.352 1.951l.039.05.228.308c.4.553.814 1.099 1.232 1.639l.463.59c.373.469.752.935 1.139 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.032.033.062.068c.526.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.526.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.526.456 1.062.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.495.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.749.474 1.51.943 2.278 1.396l.63.355c.565.326 1.134.646 1.711.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.786.275 1.581.53 2.381.779l.575.172c.814.245 1.618.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.014 16.954-36.112 21.426-57.997 16.447zM46.069 63.697c1.195 1.713 2.52 3.751 4.105 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.202 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.484.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.679.448 1.02.672l.482.319c.544.349 1.096.689 1.656 1.015l.234.136c.483.278.973.552 1.463.818l.521.271c.339.177.678.358 1.024.53l.155.07c.702.346 1.411.68 2.136.995l.472.194c.578.246 1.163.486 1.75.71l.75.275c.533.198 1.068.378 1.608.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.69-24.886 50.69-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.7-.227c-.548-.177-1.092-.365-1.632-.562l-.736-.274c-.591-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.364-.177-.721-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.106-.661-1.65-1.008l-.498-.332c-.358-.232-.717-.469-1.069-.707-.759-.524-1.497-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.897-14.486-16.819-23.971-3.062-9.836-2.401-20.878 2.903-29.84l-6.517 9.2c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.038 2.216 4.013 3.528 5.892zM89.476 49.498c.339.125.678.237 1.022.354l.451.143c.484.152.966.329 1.467.424 22.739 4.394 28.908-11.669 30.549-14.034-5.403 7.779-14.482 9.646-25.623 6.942-.88-.213-1.848-.531-2.696-.832-1.088-.388-2.16-.83-3.201-1.329-1.979-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745l-3.52 4.851c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.112 10.492 14.475 18.721 17.494z"
        },
        {
            "sn": 13,
            "name": "CSS3",
            "icon": "M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"
        },
        {
            "sn": 14,
            "name": "Bootstrap",
            "icon": "M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"
        },
        {
            "sn": 15,
            "name": "Heroku",
            "icon": "M102.1 2h-76.2c-6.6 0-11.9 5.3-11.9 11.9v100.3c0 6.6 5.3 11.9 11.9 11.9h76.3c6.6 0 11.9-5.3 11.9-11.9v-100.3c-.1-6.6-5.4-11.9-12-11.9zm-65.1 106.7v-28.2l14.1 14.1-14.1 14.1zm53 .3h-13.1l.1-.2v-49.4s3.1-11.8-39.7 4.8c-.1.2-.2-45.7-.2-45.7l13.9-.1v29.4s39-15.4 39 11.7v49.5zm-5.2-73h-14.8c5.3-6 10.2-17 10.2-17h15.3s-2.6 7-10.7 17z"
        }
    ],
    "experince": [
        {
            "sn": 0,
            "link": "https://www.cafe24.com/",
            "workPosition": "풀스택 웹 개발자",
            "periodStart": "July 2014",
            "periodEnd": "Present",
            "organisation": "카페24",
            "experience": "<ul><li>- 풀스택 개발자로 입사하여 2016 년 부터는 front-end 팀에서 근무</li><li>- restful api 전반적인 틀을 구성<br/>ㄴ <a href='../sapi.pdf' target='_blank'>팀내 공유 했던 문서 convert to PDF</a></li><li>- 신규 프로젝트 시 주로 전반적인 틀을 구성하는 역활</li><li>- angular4, vuejs 경험. 개별 프로젝트 시 reactjs 사용 경험</li><li>- elasticsearch, filebeat, logstash kafka stack 사용 경험</li><li>- test code 도입 연구 및 활용 방안 모색</li></ul>",
            "type": "work"
        },
        {
            "sn": 1,
            "link": "https://www.makeshop.com/",
            "workPosition": "풀스택 웹 개발자",
            "periodStart": "January 2011",
            "periodEnd": "January 2014",
            "organisation": "코리아 센터",
            "experience": "<ul><li>- 몰테일 서비스 개발 초기부터 참여</li><li>- 초기부터 50만 회원 300억 매출 달성까지 기여</li><li>- 6개월간 미국 현지 물류 센터 근무</li><li>- 실제로 포장부터 배송까지 경험해보며 시스템 개선 경험</li></ul>",
            "type": "work"
        },
        {
            "sn": 2,
            "link": "#",
            "workPosition": "풀스택 웹 개발자",
            "periodStart": "January 2010",
            "periodEnd": "December 2010",
            "organisation": "윈디소프트",
            "experience": "<ul><li>- 현재는 없어졌지만 많은 것을 경험할 수 있었던 곳</li><li>- 각종 게시판 CRUD, file, pagination, excel 등 기본기</li><li>- IE 6까지 지원</li><li>- 겟앰프트2, 괴혼, 헤바, 철권 게임 커뮤니티 사이트 제작</li></ul>",
            "type": "work"
        }
    ],
    "projects": [
        {
            "sn": 0,
            "projectTitle": "simple-editor (대표작)",
            "periodStart": "January 2016",
            "periodEnd": "December 2018",
            "toolsUsed": ["angular", "requireJS", "webpack", "git"],
            "tags": ["web-editor", "photoshop", "only for company"],
            "shortInfo": "<p>포토샵과 연동 가능한 enterprise web editor</p><p><img src='./img/simple_editor.gif' style='width:500px' onclick=''/></p>",
            "link": "#"
        },
        {
            "sn": 1,
            "projectTitle": "몰테일 물류 시스템 (최고 히트작)",
            "periodStart": "January 2011",
            "periodEnd": "December 2014",
            "toolsUsed": ["javascript", "cakePHP", "jquery", "mysql"],
            "tags": ["배송대행 업계 독보적 1위", "맨 바닥에서 시작", "현재 372만 회원수", "초창기 멤버"],
            "shortInfo": "<p>퍼블리싱부터 frontend, backend 구분없이 전담한 2인 개발자 중 1인</p><p>입고 시스템</p><p>계측 시스템</p><p>택배사와의 연동, 송장번호 발급 포함 배송 시스템</p><p>각각의 배송상태 처리</p><p>쿠폰 및 프로모션 코드 발급 시스템</p><p>바코드를 이용한 센터 내 물류 처리 시스템</p><p>각 물류센터 담당자 별로 처리 통계 시스템</p>",
            "link": "https://post.malltail.com"
        },
        {
            "sn": 2,
            "projectTitle": "이미지 번역툴",
            "periodStart": "January 2017",
            "periodEnd": "December 2017",
            "toolsUsed": ["angular4", "typescript", "webpack", "mercurial"],
            "tags": ["image-translation", "with c++ program", "only for company"],
            "shortInfo": "<p>frontend 전담 1인 중 1인</p><p>image 내에서 한글을 인식할 수 있는 C++ 프로그램과 연동</p><p>추출된 한글과 좌표를 이용해 자동 번역 이후 번역된 이미지 완성</p><p>심플에디터와 연동하여 이미지의 세밀한 수정 기능 제공</p>",
            "link": "#"
        },
        {
            "sn": 3,
            "projectTitle": "카페24 통합 번역 시스템 구축",
            "periodStart": "January 2018",
            "periodEnd": "December 2018",
            "toolsUsed": ["vuejs", "elasticsearch", "rabbitMQ", "logstash", "kafka"],
            "tags": ["translation", "ELK log stack", "only for company"],
            "shortInfo": "<p>카페24에 등록된 대규모 상점의 판매중인 영문,중문,일문 전체 상품을 수집</p><p>각 카테고리 별로 자동 번역 및 검수 진행</p><p>번역이 완료되면 각 언어권의 상점으로 업데이트 처리</p>",
            "link": "#"
        },
        {
            "sn": 4,
            "projectTitle": "카페24 통합 CS 시스템 구축",
            "periodStart": "January 2019",
            "periodEnd": "December 2019",
            "toolsUsed": ["vuejs", "elasticsearch", "rabbitMQ", "logstash", "kafka"],
            "tags": ["batch-system", "ELK log stack", "only for company"],
            "shortInfo": "<p>카페24에 등록된 대규모 상점의 판매중인 영문,중문,일문 으로 접수되는 모든 문의를 수집</p><p>수집된 이메일, 각종 게시판, 리뷰 등의 문의들을 일괄적으로 확인 및 처리 할수 있는 시스템 구축</p>",
            "link": "#"
        },
        {
            "sn": 5,
            "projectTitle": "프리백",
            "periodStart": "July 2015",
            "periodEnd": "December 2015",
            "toolsUsed": ["jquery", "php", "codeigniter", "svn"],
            "tags": ["imagick", "image-crop", "only for company"],
            "shortInfo": "<p>퍼블리싱부터 frontend, backend 구분없이 3인 개발자 중 1인</p><p>cafe24에 등록된 상품의 이미지들을 전부 추출</p><p>face detector, text detector, color detector, tag detector 등을 이용하여 이미지 분류</p><p>php imagic 등을 활용하여 티몰, 라쿠텐 등 해외 오픈마켓에서 요구하는 이미지로 변형</p>",
            "link": "#"
        },
        {
            "sn": 6,
            "projectTitle": "PSDA",
            "periodStart": "July 2014",
            "periodEnd": "December 2014",
            "toolsUsed": ["codeigniter", "mysql", "jquery", "svn"],
            "tags": ["psd", "translation", "only for company"],
            "shortInfo": "<p>퍼블리싱부터 frontend, backend 구분없이 웹파트 담당 3인 개발자 중 1인</p><p>cafe24 내 ec admin 상품 등록/수정 쪽에서 psd 파일을 업로드 할 수 있는 기능</p><p>업로드 된 psd 파일을 조회/처리 할 수 있는 admin 페이지</p><p>psd 내 text layer 를 파싱하여 내려주는 window server 와의 통신</p><p>추출된 한글 문구에 대한 자동 번역 및 수동 번역 기능</p><p>번역된 문구로 다시 psd파일을 만들어 줄수 있는 rendering server 와의 통신</p>",
            "link": "#"
        },
        {
            "sn": 7,
            "projectTitle": "몰테일 일본",
            "periodStart": "January 2013",
            "periodEnd": "December 2013",
            "toolsUsed": ["cakePHP", "mysql", "jquery", "svn"],
            "tags": ["japan", "malltail"],
            "shortInfo": "<p>한국 시스템을 적용하여 일본 서비스 오픈</p>",
            "link": "https://malltail.jp"
        },
        {
            "sn": 8,
            "projectTitle": "몰테일 중국",
            "periodStart": "January 2012",
            "periodEnd": "December 2012",
            "toolsUsed": ["cakePHP", "mysql", "jquery", "svn"],
            "tags": ["china", "malltail"],
            "shortInfo": "<p>한국 시스템을 적용하여 중국 서비스 오픈</p>",
            "link": "https://malltail.cn"
        },
        {
            "sn": 9,
            "projectTitle": "괴혼 게임사이트",
            "periodStart": "January 2010",
            "periodEnd": "March 2010",
            "toolsUsed": ["javascript", "php", "oracle", "postgres", "sql-relay"],
            "tags": ["cf 모델 노홍철", "네이버 메인배너광고", "각종 게시판 CRUD", "file", "pagination", "excel", "기본기"],
            "shortInfo": "<p>frontend, backend 구분없이 전담</p><p>javascript로 게임 런처 activeX 설치 및 실행</p><p>클라이언트 pc 사양 체크 activeX 설치 및 실행</p><p>게임 설명 가이드</p><p>커뮤니티 게시판</p><p>각종 이벤트 페이지</p>",
            "link": "#"
        },
        {
            "sn": 10,
            "projectTitle": "헤바온라인 게임사이트",
            "periodStart": "April 2010",
            "periodEnd": "June 2010",
            "toolsUsed": ["javascript", "php", "oracle", "postgres", "sql-relay"],
            "tags": ["mmo rpg", "사내 최고렙 달성"],
            "shortInfo": "<p>frontend, backend 구분없이 전담</p><p>javascript로 게임 런처 activeX 설치 및 실행</p><p>클라이언트 pc 사양 체크 activeX 설치 및 실행</p><p>게임 설명 가이드</p><p>커뮤니티 게시판</p><p>각종 이벤트 페이지</p>",
            "link": "#"
        },
        {
            "sn": 11,
            "projectTitle": "겟앰프트2 게임사이트",
            "periodStart": "July 2010",
            "periodEnd": "September 2010",
            "toolsUsed": ["javascript", "php", "oracle", "postgres", "sql-relay"],
            "tags": ["회심의 일격"],
            "shortInfo": "<p>frontend, backend 구분없이 전담</p><p>javascript로 게임 런처 activeX 설치 및 실행</p><p>클라이언트 pc 사양 체크 activeX 설치 및 실행</p><p>게임 설명 가이드</p><p>커뮤니티 게시판</p><p>각종 이벤트 페이지</p>",
            "link": "#"
        },
        {
            "sn": 12,
            "projectTitle": "철권 게임사이트",
            "periodStart": "October 2010",
            "periodEnd": "December 2010",
            "toolsUsed": ["javascript", "html/css", "php", "oracle", "postgres", "sql-relay"],
            "tags": ["철권카드 등록", "사내 게임기 설치"],
            "shortInfo": "<p>frontend, backend 구분없이 전담</p><p>javascript로 게임 런처 activeX 설치 및 실행</p><p>클라이언트 pc 사양 체크 activeX 설치 및 실행</p><p>게임 설명 가이드</p><p>커뮤니티 게시판</p><p>각종 이벤트 페이지</p>",
            "link": "#"
        },
    ],
    "profileLinks": [
        
    ],
    "likes": [
        {
            "name": "Programming",
            "icon": "programming.svg",
            "sn": 1
        },
        {
            "name": "Maths",
            "icon": "maths.svg",
            "sn": 2
        },
        {
            "name": "Armed Forces",
            "icon": "soldier.svg",
            "sn": 3
        },
        {
            "name": "Reading",
            "icon": "book.svg",
            "sn": 4
        },
        {
            "name": "Singing",
            "icon": "singer.svg",
            "sn": 5
        },
        {
            "name": "Watermelon",
            "icon": "watermelon.svg",
            "sn": 6
        },
        {
            "name": "Chicken",
            "icon": "chicken.svg",
            "sn": 7
        },
        {
            "name": "Cycling",
            "icon": "cycling.svg",
            "sn": 8
        },
        {
            "name": "Trekking",
            "icon": "trek.svg",
            "sn": 9
        },
        {
            "name": "Camping",
            "icon": "tent.svg",
            "sn": 10
        }

    ],
    "qoutes": [
        "유에서 무를 창조한다는 것, 만들어낸 결과물에서 만든 사람이 보인다는 것, 고통스러운 과정만큼의 결과물이 나오는 점 등이 개발자와 예술가의 공통점이다. - 김민성",
        "훌륭한 사람과 어리석은 사람의 차이는 불과 한걸음 차이다. - 나폴레옹",
        "인생의 의미는 내가 붙이고 책임도 내가 진다, 그것이 두려운 사람들은 결정을 미룬다.",
        "도저히 손댈 수가 없는 곤란에 부딪혔다면 과감하게 그속으로 뛰어들라. 그리하면 불가능하다고 생각했던 일이 가능해진다. 용기있는 자로 살아라. 운이 따라주지 않는다면 용기 있는 가슴으로 불행에 맞서라. - 키케로",
        "문제는 목적지에 얼마나 빨리 가느냐가 아니라, 그 목적지가 어디있냐는 것이다. - 메이벨 뉴컴버",
        "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한계단 한계단씩 - 조 지라드"
    ]
};

const pInfo = profile.personalInfo;
$('#name').html(pInfo.fname+' '+pInfo.lname+'<sub>&lt'+pInfo.nick+'/&gt</sub>');
$('#contact').html(pInfo.mob+'</br>'+pInfo.email);
$('#tabs').html(`                    
    <li class="tab col s2"><a href="#hello">인사말</a></li>
    <li class="tab col s2"><a href="#skills">사용해왔던 것</a></li>
    <li class="tab col s2"><a href="#projects">만들었던 것</a></li>
    <li class="tab col s3"><a href="#experience">일해왔던 곳</a></li>
    <li class="tab col s3"><a href="#education">학교 생활</a></li>
`);
$('#believe').html('<h4>I believe</h4><span></span>');
const typed = new Typed('#believe span', {
    strings: profile.qoutes,
    typeSpeed: 40,
    cursorChar:"_",
    loop:true
});
loadLikes(profile.likes);
loadLinks(profile.profileLinks);
loadSkills(profile.skills);
loadProjects(profile.projects);
loadWorks(profile.experince);
loadEducations(profile.educations);
onBodyLoad();