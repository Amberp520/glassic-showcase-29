import { describe, expect, it } from 'vitest'
import { projects, projectMatches } from '@/data/projects'
describe('Portfolio content',()=>{
 it('has six unique working project identifiers',()=>{expect(projects).toHaveLength(6);expect(new Set(projects.map(p=>p.slug)).size).toBe(6)})
 it('filters disciplines consistently',()=>{expect(projects.filter(p=>projectMatches(p,'Product Design'))).toHaveLength(4);expect(projects.filter(p=>projectMatches(p,'Branding'))).toHaveLength(2);expect(projects.filter(p=>projectMatches(p,'All'))).toHaveLength(6)})
 it('every story contains honest rationale and a complete journey',()=>{for(const p of projects){expect(p.overview.length).toBeGreaterThan(60);expect(p.flow.length).toBe(5);expect(p.decisions.length).toBe(3);expect(p.screens.length).toBe(5);expect(p.outcome.length).toBeGreaterThan(80)}})
})
