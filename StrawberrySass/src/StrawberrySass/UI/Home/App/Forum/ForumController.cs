using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StrawberrySass.Data;
using Microsoft.EntityFrameworkCore;

namespace StrawberrySass.UI.Home.App.Forum
{
    public class ForumController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ForumController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("templates/home/forum")]
        [Authorize(Roles = "Administrator,Moderator,Member")]
        public IActionResult ForumComponent() => PartialView("~/UI/Home/App/Forum/ForumComponent.cshtml");

        [HttpGet]
        [Route("templates/home/forum/subject")]
        [Authorize(Roles = "Administrator,Moderator,Member")]
        public IActionResult SubjectComponent() => PartialView("~/UI/Home/App/Forum/SubjectComponent.cshtml");

        [HttpGet]
        [Route("api/forum/subjects/{id:int}")]
        [Authorize(Roles = "Administrator,Moderator,Member")]
        public IActionResult Get(int id)
        {
            var subject = _context.Subjects
                .Include(s => s.Author)
                .Include(s => s.Comments)
                .ThenInclude(s => s.Author)
                .First(s => s.Id == id);

            var result = new SubjectViewModel()
            {
                Title = subject.Title,
                Description = subject.Description,
                Content = subject.Content,
                Author = new MemberViewModel() { UserName = subject.Author?.UserName },
                AddedDate = subject.AddedDate,
                Comments = subject.Comments.Select(c => new CommentViewModel()
                {
                    Author = new MemberViewModel() { UserName = c.Author?.UserName },
                    AddedDate = c.AddedDate,
                    Message = c.Message
                })
            };

            return Json(result);
        }

        [HttpGet]
        [Route("api/forum/subjects")]
        [Authorize(Roles = "Administrator,Moderator,Member")]
        public IActionResult GetAll()
        {
            var subjects = _context.Subjects
                .Include(s => s.Author)
                .Include(s => s.Comments)
                .ThenInclude(s => s.Author)
                .ToList();

            var result = subjects.Select(s =>
            {
                var lc = s.Comments?.Last();

                return new SubjectViewModel()
                {
                    Id = s.Id,
                    Title = s.Title,
                    Description = s.Description,
                    Content = s.Content,
                    AddedDate = s.AddedDate,
                    Author = new MemberViewModel() { UserName = s.Author?.UserName },
                    CommentCount = s.Comments?.Count ?? 0,
                    LastComment = lc == null ? null : new CommentViewModel()
                    {
                        Author = new MemberViewModel() { UserName = lc.Author?.UserName },
                        Message = lc.Message,
                        AddedDate = lc.AddedDate
                    }
                };
            });

            return Json(result);
        }
    }
}