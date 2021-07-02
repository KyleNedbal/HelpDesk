using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HelpDesk.Models;
using System.Text.Json;

namespace HelpDesk.Controllers
{
	[Route("db")]
	[ApiController]
	public class DBController : ControllerBase
	{
		[HttpGet("gettickets")]
		public string GetTickets()
		{
			List<Ticket> tickets = DAL.GetAllTickets();
			string theJson = JsonSerializer.Serialize(tickets);
			return theJson;
		}

		[HttpGet("getticket/{id}")]
		public string GetTicket(int id)
		{
			Ticket ticket = DAL.GetOneTicket(id);
			string theJson = JsonSerializer.Serialize(ticket);
			return theJson;
		}

		[HttpPost("addbookmark/{id}")]
		public string addTheBookmark(int id)
		{
			DAL.AddOneBookmark(id);
			string theJson = JsonSerializer.Serialize(id);
			return theJson;

		}

		[HttpGet("getbookmarks")]
		public string GetBookmarks()
		{
			List<Ticket> tickets = DAL.GetAllBookmarks();
			string theJson = JsonSerializer.Serialize(tickets);
			return theJson;
		}

		[HttpPut("updateaticket")]
		public string UpdateATicket([FromBody] Ticket obj)
		{
			DAL.UpdateOneTicket(obj);
			string theJson = JsonSerializer.Serialize(obj);
			return theJson;
		}

		[HttpPut("addaticket")]
		public string AddATicket([FromBody] Ticket obj)
		{
			DAL.AddOneTicket(obj);
			string theJson = JsonSerializer.Serialize(obj);
			return theJson;
		}

		[HttpPut("addaresponse")]
		public string AddAResponse([FromBody] Response obj)
		{
			DAL.AddOneResponse(obj);
			string theJson = JsonSerializer.Serialize(obj);
			return theJson;
		}

		[HttpGet("getresponses/{id}")]
		public string GetResponses(int id)
		{
			List<Response> resp = DAL.GetResponses(id);
			string theJson = JsonSerializer.Serialize(resp);
			return theJson;
		}


	}
}
