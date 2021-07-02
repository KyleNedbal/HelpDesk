using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;
using Dapper;

namespace HelpDesk.Models
{
	public class DAL
	{
		public static IDbConnection db = new MySqlConnection("Server = localhost; Database=helpdesk;Uid=root;Password=abc123");


		public static List<Ticket> GetAllTickets()
		{
			return db.GetAll<Ticket>().ToList();
		}

		public static Ticket GetOneTicket(int id)
		{
			return db.Get<Ticket>(id);
		}

		public static void AddOneBookmark(int id)
		{
			Bookmark b = new Bookmark();
			b.bookmark_id = id;
			db.Insert(b);
		}



		public static List<Ticket> GetAllBookmarks()
		{
			List<Bookmark> bms = db.GetAll<Bookmark>().ToList();
			List<Ticket> tickets = new List<Ticket>();

			foreach (Bookmark bm in bms)
			{
				if (!tickets.Any(x => x.id == bm.bookmark_id))
				{
					tickets.Add(GetOneTicket(bm.bookmark_id));

				}
			}
			return tickets;
		}

		public static void UpdateOneTicket(Ticket t)
		{
			db.Update(t);
		}

		public static void AddOneTicket(Ticket t)
		{
			db.Insert(t);
		}


		public static List<Response> GetResponses(int id)
		{
			return db.Query<Response>($"select * from responses where ticket_id={id};").ToList();
		}

		public static void AddOneResponse(Response r)
		{
			db.Insert(r);
		}

	}
}
