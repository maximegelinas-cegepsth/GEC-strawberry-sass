﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace StrawberrySass.Models
{
    public class ApplicationUser : IdentityUser
    {
        public AspNetUsersInfoSup AdditionalInfos { get; set; }
    }
}
