using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HelpDesk.Controllers
{
    public class DAL : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
