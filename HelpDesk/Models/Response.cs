using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace HelpDesk.Models
{
	[Table("responses")]
	public class Response
	{
[Key]
		public int id { get; set; }
		public int ticket_id { get; set; }
		public string response { get; set; }
		public int votes { get; set; }
	}
}
