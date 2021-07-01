using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace HelpDesk.Models
{
	[Table("tickets")]
	public class Ticket
	{
		[Key]
		public int id { get; set; }
		public string subj { get; set; }
		public bool complete { get; set; }
		public string question { get; set; }
	}
}
