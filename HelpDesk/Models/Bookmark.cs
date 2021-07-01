using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace HelpDesk.Models
{
	[Table("bookmarks")]
	public class Bookmark
	{
[Key]
		public int id { get; set; }
		public int bookmark_id { get; set; }
	}
}
