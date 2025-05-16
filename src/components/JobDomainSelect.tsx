
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const popularDomains = [
  "Data Scientist",
  "Software Engineer",
  "UX Designer",
  "Product Manager",
  "DevOps Engineer",
];

const JobDomainSelect = () => {
  const [jobDomain, setJobDomain] = useState("");

  return (
    <div className="glass-card p-6 rounded-xl bg-pastel-gradient">
      <h2 className="text-xl font-semibold mb-2 text-gradient-purple">Select Job Domain</h2>
      <p className="text-muted-foreground mb-6">
        Specify your target job title or domain
      </p>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Enter job title (e.g., Data Scientist)"
          className="pl-10 bg-white/60 border-gapmap-gray/20 focus:border-gapmap-pastel-purple focus:ring-gapmap-pastel-purple"
          value={jobDomain}
          onChange={(e) => setJobDomain(e.target.value)}
        />
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-3">Popular Domains:</p>
        <div className="flex flex-wrap gap-2">
          {popularDomains.map((domain) => (
            <Button
              key={domain}
              variant="outline"
              size="sm"
              className={`text-xs ${
                jobDomain === domain
                  ? "bg-gapmap-pastel-purple/20 border-gapmap-pastel-purple/40 text-gapmap-pastel-purple-dark"
                  : "hover:bg-gapmap-pastel-purple/10 hover:border-gapmap-pastel-purple/30"
              }`}
              onClick={() => setJobDomain(domain)}
            >
              {domain}
            </Button>
          ))}
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-r from-gapmap-pastel-purple to-gapmap-pastel-blue hover:from-gapmap-pastel-purple-dark hover:to-gapmap-pastel-blue-dark text-white"
        disabled={!jobDomain}
      >
        Analyze Skill Gaps
      </Button>
    </div>
  );
};

export default JobDomainSelect;
