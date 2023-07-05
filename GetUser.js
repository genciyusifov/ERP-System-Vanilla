  function getUser(user) {
    return  `      <div class="flex items-center justify-evenly pt-2">
    <img class="w-20 h-20 object-cover rounded-[50%]"
      src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
      alt="">
    <div class="name text-white">${user.name} ${user.surname} </div>
  </div>

  <div class="mt-8">
    <div class="text-lg font-semibold text-white">Admin məlumatları</div>
    <div class="mt-4">
      <div class="flex items-center text-white">
        <i class="fa-solid fa-user"></i>
        <div class="flex flex-col ml-2">
          <div class="font-medium text-white">Vəzifə</div>
          <div class="text-gray-300">${user.position}</div>
        </div>
      </div>
      <div class="flex items-center mt-2 text-white">
        <i class="fa-solid fa-manat-sign"></i>
        <div class="flex flex-col ml-2">
          <div class="font-medium text-white">Aylıq gəliri</div>
          <div class="text-gray-300">${user.salary}</div>
        </div>
      </div>
      <div class="flex items-center mt-2 text-white">
        <i class="fa-solid fa-manat-sign"></i>
        <div class="flex flex-col ml-2">
          <div class="font-medium text-white">İllik Gəliri</div>
          <div class="text-gray-300">${user.salary*12}</div>
        </div>
      </div>
      <div class="flex items-center mt-2 text-white">
        <i class="fa-regular fa-calendar-days"></i>
        <div class="flex flex-col ml-2">
          <div class="font-medium text-white">Təcrübə</div>
          <div class="text-gray-300">${user.experience} il</div>
        </div>
      </div>
      <div class="flex items-center mt-2 text-white">
        <i class="fa-solid fa-user-group"></i>
        <div class="flex flex-col ml-2">
          <div class="font-medium text-white">İşçilərinin sayı</div>
          <div class="text-gray-300">${user.colleagues}</div>
        </div>
      </div>
      <div class="mt-2 text-white">İşçilərin adları:</div>
        <p class="p-2 mt-2 bg-slate-700 border rounded" >${user.collaborator.toString()}</p>
    </div>
  </div>`
}
export default getUser